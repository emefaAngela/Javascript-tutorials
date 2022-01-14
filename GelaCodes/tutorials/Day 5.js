//Javascript scopes
//in js we have local and global variables

//global variables
//a variable is a global variable when it is declared in the root file 
//local variables
//local variables are variables declared inside a function
//illustration

var number = 10;
//number is a global variable
function calc(){
    var name = ama;
    //name is a local variable since it is defined in a function calc
    return number;
}

//from the above code number is a global variable since it was declared in the root file or outside the function calc


//FUNCTION AND BLOCK SCOPES
// a function scope is whatever is contained in the curly bracket of a function
//block scopes refer to whatever is contained in the curly bracket of conditional statements,loops etc
// a variable declared in a function scope can not be called outside the function
//variables in block scopes can be called individually in the root file
/*
NOTE
the way variables behave in block scopes isn't the right way.
this is due to a phenomenom called hoisting
() 
to correct the defect we use "let" instead of "var" in blok scopes to prevent them from behaving this way
*/

//LET AND CONST VARIABLES