const a = [0]
console.log(a.length)
a[3] = 3
console.log(a.length)
for (let item of a) {
  console.log(item)
}
a.map(item => {console.log(item)})
a.forEach(item => {console.log(item)})
console.log(Object.keys(a))
delete a[3]
console.log(a.length)
a[2] = 2
a.length = 1
console.log(a[0],a[1],a[2]) 

const arr =[1,2,3,4,5]
arr.length =2 
console.log(arr,"arr")


// 1
// 4
// 0
// undefined
// undefined
// 3
// 0
// 3
// 0
// 3
// [ '0', '3' ]
// 4
// 0 undefined undefined
// [ 1, 2 ] arr

