// yaakovGreeter.sayHello();
// johnGreeter.sayHi();

// Immediately Invoked Functional Expression or
// Example 1 
// var a =(function (){
//     console.log("Hello Cousera");
// });
// a();
// Even better- Do This, it's called IIFE Example 2
// (function (){
//     console.log("Hello Cousera");
// })();
// **** You can take this further by: Example 3
// (function (name){
//     console.log("Hello " + name);
// })("Coursera"); 
// Even further Example 4
// (function (window) {
//     var yaakovGreeter = {};
//     yaakovGreeter.name = "Yaakov";
//     var greeting = "Hello ";
//     yaakovGreeter.sayHello = function () {
//         console.log(greeting + yaakovGreeter.name);
//     }

//     window.yaakovGreeter = yaakovGreeter;

// })(window);
