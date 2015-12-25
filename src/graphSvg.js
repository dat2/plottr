import React from 'react';

export default function GraphSvg({ width, height, padding, children }) {
  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid">
      <g id="chart" transform={`translate(${padding.left}, ${padding.top})`}>
        { children }
      </g>
    </svg>
  );
}
