//similarity


var a = "foo";
var b = ["f","o","o"];

a.length;
b.length;
//3

a.indexOf( "o" );
b.indexOf( "o" );

//1


var c = a.concat( "bar" );  //foobar
var d = b.concat( ["b","a","r"] );  // ["f","o","o","b","a","r"]

a === c;
b === d;
// false
// false

// JavaScript strings are immutable, while arrays are quite mutable. Moreover, the a[1] character position access form was not always widely valid JavaScript. Older versions of IE did not allow that syn‐ tax (but now they do). Instead, the correct approach has been a.charAt(1).

a.join;         // undefined
a.map;          // undefined

a.reverse;
b.reverse();

// undefined

var c = a
// split `a` into an array of characters
.split( "" )
// reverse the array of characters
.reverse()
// join the array of characters back to a string
.join( "" );