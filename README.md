# plottr
A react svg plotting library, inspired by d3, c3, and my own work on graphing.

## Introduction
This library provides a couple prebuilt graphs, and some tools to help you build
your own graphs, such as axes, svg wrapping, etc.

If you want some more prebuilt graphs, you can request them and I will look into
it.

## Basic Usage

```js
import { LineChart } from 'plottr';

ReactDOM.render(
  <LineChart data={data} style={{width: '50%'}}/>,
  document.getElementById('test')
);
```

## SVG Export
Since this is done in react, it is very easy to make an exported image.

```js
import { exportToFile } from 'plottr';
exportToFile(<LineChart data={data}/>, 'linechart.svg');
```
