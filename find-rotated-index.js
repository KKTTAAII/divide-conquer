function findRotatedIndex(array, num) {
  var pivot = findPivot(array);
  if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
    return binarySearch(array, num, 0, pivot - 1);
  } else {
    return binarySearch(array, num, pivot, array.length - 1);
  }
}

function binarySearch(array, num, start, end) {
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (num < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  var start = 0;
  var end = arr.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    else if (arr[start] <= arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

module.exports = findRotatedIndex;

/**
 * This works only when the sorted array is separated in half
 * if one half is bigger than the other half, this wont work
  console.log(arr);
  let leftInd = 0;
  let rightInd = arr.length - 1;
  while (leftInd <= rightInd) {
    let middleInd = Math.floor((leftInd + rightInd) / 2);
    let middleValue = arr[middleInd];
    if (num >= arr[0]) {
      rightInd = middleInd;
      middleInd = Math.floor((leftInd + rightInd) / 2);
      middleValue = arr[middleInd];
      console.log("right", rightInd);
      console.log("middleInd", middleInd);
      console.log("middleVal", middleValue);
      if (middleValue < num) {
        leftInd = middleInd + 1;
      } else if (middleValue > num) {
        rightInd = middleInd - 1;
      } else {
        return middleInd;
      }
    } else {
      leftInd = middleInd;
      middleInd = Math.floor((rightInd - leftInd) / 2);
      middleInd = leftInd + middleInd;
      middleValue = arr[middleInd];
      console.log("left", leftInd);
      console.log("middleInd", middleInd);
      console.log("middleVal", middleValue);
      if (middleValue < num) {
        leftInd = middleInd + 1;
      } else if (middleValue > num) {
        rightInd = middleInd - 1;
      } else {
        return middleInd;
      }
    }
  }
  return -1; */
