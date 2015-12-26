import fs from 'fs';
import ReactDOMServer from 'react-dom/server';

// TODO tests
export default function exportToFile(graph, filename) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, ReactDOMServer.renderToString(graph), function(err) {
      if(err) {
        reject(err);
      }
      resolve();
    });
  });
}
