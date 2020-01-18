module.exports = function parseStringAsArray(arrayAsStrong) {
  return arrayAsStrong.split(",").map(tech => tech.trim());
};
