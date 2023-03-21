// Arrow function with no arguments and no return value
let show = () => {
    console.log("Arrow Function");
}
show();

let show_ = () => console.log("Arrow Function");
show_();

// Arrow Function with arguments and no return value
let add = (num1, num2 ) => {

    console.log(num1 + num2);
}
add(10, 20);

// Arrow Function with arguments and return value
let multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
}
const multiplyResult = multiply(40, 5);
console.log(multiplyResult);


let multiplyRes = (num1, num2) =>  num1 * num2;
console.log(multiplyRes(30, 5));

let display = (num1)=>{
 console.log(num1*num1);
}
display(10);

//for each method 
const array = [2, 3, 4, 5, 9];
array.forEach( function( currentValue, index, array ) {
    console.log(currentValue, index, array);
});

array.forEach( ( currentValue ) => {
    console.log(currentValue);
});

console.log("forEach to find even number");
array.forEach(element => {
    if (element%2==0) {
        console.log(element);
    }
});

console.log("Sum the array......");
let sum =0;
array.forEach((element) => {
    sum = sum+ element;
});
console.log(sum);

console.log("Even index element in the array");
array.forEach((element,index)=>{
    if (index%2==0) {
        console.log(element);
        
    }

});




