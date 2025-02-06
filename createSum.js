function sum(num, currentSum = 0) {
  currentSum = num + currentSum;
  function sum1(val) {
    return sum(val, currentSum);
  }
  sum1.valueOf = () => currentSum;
  return sum1;
}
const sum1 = sum(1)
sum1(2) == 3 // true
sum1(3) == 4 // true
sum(1)(2)(3) == 6 // true
sum(5)(-9)(2) == 6 
