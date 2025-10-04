package main

import ("fmt"
"unicode/utf8"
)

func main(){
    str1 := "mom"
    isPalidorme := checkPalidrome(str1)
    
    fmt.Printf("the response is",isPalidorme)
}


func checkPalidrome(str string) bool{
    
r := utf8.RuneCountInString(str);
mid := r/2

    
    var i int ;
    for i =0 ; i<=mid ;i++ {
        if str[i] != str[r-i-1]{
            return false
        }
    }
    
    return true
    
}
