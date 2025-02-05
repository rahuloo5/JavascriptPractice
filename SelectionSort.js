function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i
    let min = arr[minIndex]
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        minIndex = j
        min = arr[j]
      }
    }
    swap(arr, i, minIndex)
  }
}
function swap(arr, x, y) {
  if (x === y) return
  [arr[x], arr[y]] = [arr[y], arr[x]];
}
