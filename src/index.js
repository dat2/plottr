import LineChart from './lineChart';


// TESTING
import ReactDOM from 'react-dom';

const data = {
  data: [
    { x: 0, ys: [ 1, 3, 7, 2, 5, 1, 5, 2, 6 ] },
    { x: 1, ys: [ 2, 6, 9, 3, 1, 8, 2, 8, 1 ] },
    { x: 2, ys: [ 0, 4, 5, 8, 1, 8, 8, 6, 1 ] }
  ]
};

ReactDOM.render(
  <LineChart data={data} style={{width: '50%'}}/>,
  document.getElementById('test')
);
