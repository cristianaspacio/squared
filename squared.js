function squared(arr) {
  return _.partition(arr, function (entry) { return Math.sqrt(entry) % 1 === 0; });
}

console.log(squared([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
