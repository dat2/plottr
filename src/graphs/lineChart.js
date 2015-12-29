import React from 'react';

import randomColor from 'randomcolor';

import GraphSvg from '../utils/graphSvg';
import XAxis from '../utils/xAxis';
import YAxis from '../utils/yAxis';

import { domain, flatten, sort, uniq } from '../utils/functions';

const svgWidth = 800,
  svgHeight = 450,
  svgPadding = { top: 10, bottom: 10, left: 10, right: 10 },
  chartWidth = (svgWidth - svgPadding.left - svgPadding.right),
  chartHeight = (svgHeight - svgPadding.top - svgPadding.bottom);

export default function LineChart({ data: { data = [] }, graph: { } = {} } = {}) {
  let xs = data.map(d => d.x);
  let yss = data.map(d => d.ys);

  const [, xMax] = domain(xs);
  const [, yMax] = domain(flatten(yss));

  const xScale = chartWidth / xMax;
  const yScale = chartHeight / yMax;

  const points = yss.map((ys, i) => ({ ys: ys.map(y => y * yScale), x: xs[i] * xScale }));

  // in case users give us an empty array
  const colours = data.length && data[0].ys.length ?
    randomColor({ count: data[0].ys.length, luminosity: 'light' }) :
    [];

  const yTicks = sort(uniq(flatten(yss)), (a, b) => a - b);

  // TODO plottr-info-circle needs an on:hover
  return (
    <GraphSvg width={svgWidth} height={svgHeight} padding={svgPadding}>
      <g id='lines'>
        {
          points.map(({ x, ys }, i) =>
            ys.map((y, yI) => (
              <g key={yI}>
                <line
                  x1={ i > 0 ? points[i-1].x : points[i].x }
                  x2={ x }
                  y1={ chartHeight - (i > 0 ? points[i-1].ys[yI] : points[i].ys[yI]) }
                  y2={ chartHeight - y }
                  key={ yI }
                  stroke={ colours[yI] }></line>
                <circle
                  cx={ x }
                  cy={ chartHeight - y }
                  r='2'
                  fill={ colours[yI] }
                  stroke='transparent'
                  className='plottr-info-circle'
                  />
            </g>
            ))
          )
        }
      </g>
      <g id='axis'>
        <XAxis xs={xs} xScale={xScale} chartWidth={chartWidth} chartHeight={chartHeight} tickSize={svgPadding.bottom / 2} textSize={svgPadding.bottom / 2} />
        <YAxis ys={yTicks} yScale={yScale} chartWidth={chartWidth} chartHeight={chartHeight} tickSize={svgPadding.left / 2} textSize={svgPadding.left / 2} />
      </g>
    </GraphSvg>
  );
}
