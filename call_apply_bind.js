// //Call Function

// var obj ={num:5};
// var addThis = function(a, b) {
//     return this.num + a + b;
// };

// console.log(addThis.call(obj,2,3));

// //Apply Function

// console.log(addThis.apply(obj,[6,7]));

// //Bind Function

// var student = {age:20};

// var stdFunction = function() {
//     return this.age
// }

// var bound = stdFunction.bind(student);
// console.log(bound());


// // Currying by using Bind:

// let multiply = function (x,y) {
//     console.log(x*y);
// }

// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(5);

// //Currying by using Closure:

// let multiplyy = function (x) {
//     return function(y) {
//         console.log(x*y);
//     }
// }

// let multiplyByThree = multiplyy(3);
// multiplyByThree(5);



// let name = (arr)=>{
//     var count=0
//     return () => {
//         console.log('Hello '+arr[count])
//         count++
//     }
// }

// let fun = name(["Ram","Shyam",'Premnath']);

// fun()// Print Hello Ram

// fun()//print Hello 
// fun()
let a = 5;
var b = 6;
console.log(this.b);
console.log(window.b);
console.log(window.a);
console.log(this.a);
