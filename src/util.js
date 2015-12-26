export function domain(ds = []) {
  return ds.length ? [Math.min(...ds), Math.max(...ds)] : [0, 1];
}

export function copy(arr) {
  return arr.reduce((copy, x) => {
    copy.push(x);
    return copy;
  }, []);
}

export function flatten(a) {
  return a.reduce((x,y) => x.concat(y), []);
}

export function uniq(a) {
  return a.reduce((copy, x) => {
    if(copy.indexOf(x) === -1) {
      copy.push(x);
    }
    return copy;
  }, []);
}

export function sort(arr, sortFn = undefined) {
  const clone = copy(arr);
  clone.sort(sortFn);
  return clone;
}

export function reverse(arr) {
  const clone = copy(arr);
  clone.reverse();
  return clone;
}
