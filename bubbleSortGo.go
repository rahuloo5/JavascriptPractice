package main

import ("fmt")

func main(){

  var numbers [] int = [] int {4,3,2,1,5,8,9,7}
  bubble(numbers)

  fmt.Printf("answer is ",numbers)


}

func bubble (number []  int){
      var leng = len(number);
  var i int;
  for i =0 ; i<leng ;i++ {
    sweep(number)
    }
}

  func sweep(nums [] int){
 var N int = len(nums);
    var firstIndex int =0;
    var secondIndex int =1;

    for secondIndex<N {

var firstNumber int = nums[firstIndex]
      var secondNumber int = nums[secondIndex]

      if firstNumber >secondNumber {

nums[firstIndex] = secondNumber;
        nums[secondIndex] = firstNumber;
        
        }
      firstIndex++
      secondIndex++
      
      }

    }
