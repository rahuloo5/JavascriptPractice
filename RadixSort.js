function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
  }
  console.log(getDigit(43263, 0)) // 3
  console.log(getDigit(43263, 1)) // 6
  console.log(getDigit(43263, 2)) // 2

  function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
  }
  console.log(digitCount(0)) // 1
  console.log(digitCount(21)) // 2
  console.log(digitCount(3547)) // 4

  function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
  }
  console.log(mostDigits([44, 849, 1, 3333])) 


  function radixSort(arrOfNums) {
    let maxDigitCount = mostDigits(arrOfNums)
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]
      
      for (let i = 0; i < arrOfNums.length; i++) {
        let digit = getDigit(arrOfNums[i], k)
        digitBuckets[digit].push(arrOfNums[i])
        console.log(digitBuckets,"digitBucket")
      }
      // New order after each loop
      arrOfNums = [].concat(...digitBuckets)
    }
    return arrOfNums
  }
  console.log(radixSort([1, 33, 444, 0, 3, 2])) 


//   Time complexity of Radix Sort
// The runtime of Radix Sort depends on the number of digits in the longest number, k, and the length of the input array, n.

// For clarity, if the input array is [22, 6544, 894], then k = 4 and n = 3.

// For every loop iteration up to k, we have to loop over all of the numbers in the array; therefore, the time complexity of Radix Sort is O(k * n).

// The time complexity of Radix Sort will always be O(k * n) - It doesn’t matter whether the input array is almost sorted, “randomly” distributed, or completely in reverse.

// Radix Sort best case: O(k * n)

// Radix Sort worst case: O(k * n)

// Radix Sort average case: O(k * n)

// Space complexity of Radix Sort
// The space complexity of Radix Sort is O(n + d), where n is the length of the input array, and d is the amount of numbers each digit could be – in our case, 0 to 9, so d is 10.

// Where does d come from? From the fact that we have to create an array of “buckets” at length d.

// And n comes from the fact that we have to store each number in a bucket.


// Advantages and disadvantages of Radix Sort
// Radix can outperform efficient comparison sorting algorithms, such as Merge Sort and Quick Sort, which have best-case time complexities of O(n* log(n)) – if k is less than log(n).

// However, Radix Sort isn’t comparison-based, and uses buckets instead. This means that if we wanted to sort strings or floating-point numbers, then we’d need to tweak our Radix Sort function to account for this; for example, if we were sorting strings alphabetically, we’d need 26 buckets – one for each letter of the alphabet – instead of 10.

// Compare this to Merge Sort or Quick Sort in which we can throw strings, numbers, or floats and it will sort them without the need to make modifications. Comparison-based sorts are more flexible; Radix Sorting is more specialized.

// Another disadvantage of Radix Sort is that it takes up more space in memory than Quick Sort or Merge Sort, which have space complexities of O(log(n)) and O(n) respectively, compared to Radix Sort’s O(n + d).

// For these reasons, Radix Sort isn’t as widely used as Merge Sort or Quick Sort.