function findFloor(arr, num, l = 0, h = arr.length - 1) {
  let mid = Math.floor((l + h) / 2);
  if (l > h) return -1;

  if (num >= arr[h]) return arr[h];

  if (arr[mid] === num) return arr[mid];

  if (mid > 0 && arr[mid] > num && arr[mid - 1] <= num) {
    return arr[mid - 1];
  }

  if (num < arr[mid]) {
    return findFloor(arr, num, l, mid - 1);
  }

  if (num > arr[mid]) {
    return findFloor(arr, num, mid + 1, h);
  }
}

module.exports = findFloor;
