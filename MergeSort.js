
const merge =(left,right)=>{
    let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  
  return [...sortedArr, ...left, ...right]
}


const mergeSort=(arr)=>{

    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}


let arr = [2,3,5,4,8,7,9];

let result =mergeSort(arr)
console.log(result,"result")


// O(n log(n)) is a combination of linear time, O(n), and logarithmic time, O(log(n)). O(n log(n)) is known as linearithmic time.

// But where does this log(n) come from? If the length of the input array is 8, then the array will be divided in half three times:

// 8 => 4 4 => 2 2 2 2 => 1 1 1 1 1 1 1 1

// Each arrow represents a division by 2. We start with one array of 8 items, then two arrays of 4 items, then four arrays of 2 items, and finally eight arrays of 1 item.

// This is logarithmic time. Every time we double the size of the input, the number of operations (divisions) increases by just 1.

// Now I’ve explained where the log(n) comes from, what about the n? The n comes from the merge helper function. It has to make roughly eight comparisons for an array of 8 items; hence linear time.
// So, in total, the worst-case time complexity of Merge Sort is O(n log(n)). The best worst-case we can get from a sorting algorithm.

// Merge Sort is one of the most efficient sorting algorithms for sorting large arrays.

// However, if you know that the input array will be small, or sorted/almost sorted, you might be better off using an algorithm like insertion sort which is of O(n) at best case (O(n2) worst case).


// Space Complexity of Merge Sort
// Merge Sort is very fast for a sorting algorithm, but as with most algorithms, the gains in speed come with the cost of taking up more space in memory. The larger the array, the more arrays that have to be stored in memory (from dividing them up). But in most cases, this isn’t a problem, usually we care more about time than space.

// The space complexity of Merge Sort is O(n).