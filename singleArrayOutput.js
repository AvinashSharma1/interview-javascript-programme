let arrayValues = [[1],[2,3],[4],[3,[2,4]]];
function singleArrayOutput(arr) {
  return arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...singleArrayOutput(item));
    } else {
      result.push(item);
    }
    return result;
  }, []);
}
