module.exports = function reverse (n) {
  if (n < 0) {
    return String(n = -n).split("").reverse().join("");
  } else {
    return String(n).split("").reverse().join("");
  }
}
