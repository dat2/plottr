import React from 'react';

export default function yAxis({ ys = [], yScale, chartWidth, chartHeight, tickSize, textSize } = {}) {

  const ticks = ys
    // .filter ?
    .map(y => ({ text: y, y: chartHeight - yScale * y, x1: -tickSize, x2: 0 }));

  return (
    <g className='plottr-axis'>
      <line x1='0' x2='0' y1='0' y2={chartHeight} stroke='black'/>
      <g className='plottr-ticks'>
        {
          ticks.map(({ y, x1, x2, text }, i) => (
            <g className='plottr-tick' key={i}>
              <line x1={x1} x2={x2} y1={y} y2={y} stroke='black' />
              <text x={x1} y={y}
                textAnchor='middle'
                style={{fontSize: textSize}} transform={`rotate(-90 ${x1} ${y})`}>
                { text }
              </text>
            </g>
          ))
        }
      </g>
    </g>
  );
}
