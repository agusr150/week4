function cariMedian(arr) {
  // you can only write your code here!
  let l = arr.length
  let l2 = l/2
  if (Number.isInteger(l2)){
      median = (arr[l2-1]+arr[l2])/2
  }
  else{
      index = (Math.floor(l2))
      median = arr[index]
  }
  return median
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5