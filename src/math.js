export function linearInterpolate(a, b) {
  const length = b - a;
  return function(x) {
    const percent = (x - a) / length;
    return percent + a;
  };
}
