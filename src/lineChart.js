import GraphSvg from './graphSvg';
import randomColor from 'randomcolor';

const svgWidth = 800,
  svgHeight = 450,
  svgPadding = { top: 10, bottom: 10, left: 10, right: 10 },
  chartWidth = (svgWidth - svgPadding.left - svgPadding.right),
  chartHeight = (svgHeight - svgPadding.top - svgPadding.bottom);

function domain(ds = []) {
  return ds.length ? [Math.min(...ds), Math.max(...ds)] : [0, 1];
}

function flatten(a) {
  return a.reduce((x,y) => x.concat(y), []);
}

export default function LineChart({ style, data: { data = [] }, graph: { tickSize = 5 } = {} } = {}) {
  const localStyle = Object.assign({}, style);

  const xs = data.map(d => d.x);
  const yss = data.map(d => d.ys);

  const [, xMax] = domain(xs);
  const [, yMax] = domain(flatten(yss));

  const xScale = chartWidth / xMax;
  const yScale = chartHeight / yMax;

  // in case users give us an empty array
  const colours = data.length && data[0].ys.length ?
    randomColor({ count: data[0].ys.length, luminosity: 'light' }) :
    [];


  // TODO plottr-info-circle needs an on:hover
  return (
    <div style={localStyle}>
      <GraphSvg width={svgWidth} height={svgHeight} padding={svgPadding}>
        <g id='lines'>
          {
            data.map(({ x, ys }, i) =>
              ys.map((y, yI) => (
                <g key={yI}>
                  <line
                    x1={ (i > 0 ? data[i-1].x : data[i].x) * xScale }
                    x2={ x * xScale }
                    y1={ chartHeight - ((i > 0 ? data[i-1].ys[yI] : data[i].ys[yI]) * yScale) }
                    y2={ chartHeight - (y * yScale) }
                    key={ yI }
                    stroke={ colours[yI] }></line>
                  <circle
                    cx={ x * xScale }
                    cy={ chartHeight - (y * yScale) }
                    r='2'
                    fill={ colours[yI] }
                    stroke='transparent'
                    className="plottr-info-circle"
                    />
              </g>
              ))
            )
          }
        </g>
        <g id='axis'>
          <line className='x axis' x1='0' x2={chartWidth} y1={chartHeight} y2={chartHeight} stroke='black'/>
          <g className='ticks'>
            {
              data.map(({ x }, i) => (
                <line x1={x * xScale} x2={x * xScale} y1={chartHeight} y2={chartHeight + tickSize} key={i} stroke='black'/>
              ))
            }
          </g>
          <line className='y axis' x1='0' x2='0' y1='0' y2={chartHeight} stroke='black'/>
          <g className='ticks'>
          </g>
        </g>
      </GraphSvg>
    </div>
  );
}
