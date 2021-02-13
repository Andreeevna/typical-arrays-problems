
exports.min = function min (array) {
    if (!array || array.length === 0)  {
    return 0;
  }
    let posMin = array[0];
    for (let i = 0; i < array.length; i++) { 
    if (posMin > array[i]) {
      posMin = array[i]
    }
  }
  return posMin;
}

exports.max = function max (array) {
  if (!array || array.length === 0)  {
    return 0;
  }
  let posMax = array[0];
  for (let i = 0; i < array.length; i++) { 
    if (posMax < array[i]) {
      posMax = array[i]
    }
  }
  return posMax;
}

exports.avg = avg = arr => arr && arr.length !== 0 ? arr.reduce((acc, i) => acc + i, 0) / arr.length : 0;
