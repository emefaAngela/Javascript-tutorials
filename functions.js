//functions in javascript

//functions enhances structuring and reusability of codes
//three types of functions include
/*
-name function
-anonymous function
-immediately invoked function
*/

//name function
//illustration

function testExample(){
    var greeting = "Hi! My name is Daniel";
    console.log(greeting);
}


//a name function won't output its result unless being called
//a name function is called by its function name 
//so from the illustrated code above, the function can be called as

console.log(testexample());


//anonymous function
//these functions are tied to variables
//difference between name function and anonymous function is hoisting

//illustration

var testExample = function(a){
  var greeting = "Hi! My name is " + a;
  return greeting;
}

//immediately invoked function
//doesn't have a name
//runs as soon as code is opened in browser
//it is wrapped in a pair of parentheses and another is added right at the end of the function

//illustration
(function() {
    var greeting = "Hi! My name is Daniel";
    console.log(greeting);
}())

