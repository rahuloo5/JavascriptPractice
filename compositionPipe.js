// const times = (y) =>  (x) => x * y
// const plus = (y) => (x) => x + y
// const subtract = (y) =>  (x) => x - y
// const divide = (y) => (x) => x / y

function pipe(funcs) {
	return function (initialValue){
		let res = initialValue;
		console.log(res)
		for(let i=0;i<funcs.length;i++){
			res = funcs[i](res);
		}
		return res;
	}
}
 
// console.log(
// pipe([
//   times(2),
//   plus(3),
//   times(4)
// ]) (5))
// pipe([
//   times(2)
//   // times(3)
// ])(5) 
