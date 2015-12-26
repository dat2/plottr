export LineChart from './lineChart';

export XAxis from './xAxis';
export YAxis from './yAxis';
export GraphSVG from './graphSvg';
export exportToFile from './exportToFile';

// TESTING
import ReactDOM from 'react-dom';
import LineChart from './lineChart';
if(process.env.NODE_ENV === 'development') {

  const data = {
    data: [
      { x: 0, ys: [ 1, 3, 7, 2, 5, 1, 5, 2, 6 ] },
      { x: 1, ys: [ 2, 6, 9, 3, 1, 8, 2, 8, 1 ] },
      { x: 2, ys: [ 0, 4, 5, 8, 1, 8, 8, 6, 1 ] },
      { x: 3, ys: [ 1, 3, 7, 2, 5, 1, 5, 2, 6 ] },
      { x: 4, ys: [ 9, 3, 1, 2, 2, 8, 1, 6, 8 ] },
      { x: 5, ys: [ 0, 4, 5, 8, 6, 1, 8, 7, 2 ] },
      { x: 6, ys: [ 8, 6, 1, 1, 3, 1, 8, 1, 8 ] },
      { x: 7, ys: [ 2, 6, 8, 2, 5, 1, 5, 2, 6 ] },
      { x: 8, ys: [ 0, 4, 5, 8, 1, 8, 9, 3, 1 ] }
    ]
  };

  ReactDOM.render(
    <LineChart data={data} style={{width: '50%'}}/>,
    document.getElementById('test')
  );
}
