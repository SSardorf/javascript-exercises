const ftoc = function(fahrenheitDegrees) {
  let convertedDegrees = (fahrenheitDegrees-32)*(5/9)
  return Math.round(convertedDegrees*10)/10
}

const ctof = function(celciusDegrees) {
  let convertedDegrees = celciusDegrees*9/5+32
  return Math.round(convertedDegrees*10)/10
}

module.exports = {
  ftoc,
  ctof
}
