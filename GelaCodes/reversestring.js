// this function reverses a string by the implementation of a stack

function reverse_str(string){
    
    //initializing an empty stack
    let stack=[];

    //looping through the string and pushing the characters into the stack
    for(i=0;i<=string.length;i++){
        stack.push(string[i]);
    }

    //initializing an empty string to store the reversed string
    let reversed_str="";

    //looping through the stack and popping the lastelement into the empty string

    while(stack.length>0){
        reversed_str+=stack.pop();
    }
    return reversed_str
}
console.log(reverse_str("jack"));
