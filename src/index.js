
exports.min = function min (array) {
  if (array !== [] && array != null && array[0] != null) {
    return Math.min(...array);
  }
  return 0;
}

exports.max = function max (array) {
  if (array !== [] && array != null && array[0] != null) {
    return Math.max(...array);
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array != [] && array != null && array[0] != null) {
    let sum = 0;
    for( let i = 0; i < array.length; i++ ){
    sum += array[i]; 
}
  let average = sum/ array.length;
  return average;
  }
  return 0;
}
