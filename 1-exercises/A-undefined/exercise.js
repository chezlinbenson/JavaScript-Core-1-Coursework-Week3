/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a;
console.log(a);
//a was not assigned any value



// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);
//The variable "sayHello" were not passed any value


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
//Again the function "sayHelloToUser", has not been passed any arguments


// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// In this example above, there are no index value 3 in the array.
// Arrays work with zero indexing and therefore a index of 3 would indicate a fourth value in the array
// and this array only has three values and result to an undefined error. 
