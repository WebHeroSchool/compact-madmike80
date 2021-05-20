function compact(arr) {
  let result = [];
  arr.map((item) => {
    if (item) {
      result.push(item);
    }
  });
  return result;
}

module.exports = compact;
