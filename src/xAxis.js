// count ticks from data

export default function xAxis({ xs = [], xScale, chartWidth, chartHeight, tickSize, textSize } = {}) {
  const ticks = xs
    // .filter ?
    .map(x => ({ text: x, x: x * xScale, y1: chartHeight, y2: chartHeight + tickSize }));

  return (
    <g className='plottr-axis'>
      <line x1='0' x2={chartWidth} y1={chartHeight} y2={chartHeight} stroke='black'/>
      <g className='plottr-ticks'>
        {
          ticks.map(({ text, x, y1, y2 }, i) => (
            <g className='plottr-tick' key={i}>
              <line x1={x} x2={x} y1={y1} y2={y2} stroke='black' />
              <text x={x} y={y2 + textSize}
                textAnchor='middle' dominantBaseline='central'
                style={{fontSize: textSize}}>
                { text }
              </text>
            </g>
          ))
        }
      </g>
    </g>
  );
}
