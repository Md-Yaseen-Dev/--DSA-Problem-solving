// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"



var createHelloWorld = function(){

    return function(){
        
        return "hello world" 
}}
const f = createHelloWorld();

console.log(f());
console.log(f({},null,42));


var createHelloWorld1 = function(){

    return(...args)=> "hello world"
}

const g = createHelloWorld1();

console.log(g());
