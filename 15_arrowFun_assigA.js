console.log(`*************arrow functions - with no args and no return value*****************`);

let greet = () =>{
    console.log(` inside arrow function:"Good Morning, Today is Monday"`);

}
greet();

console.log(`******* With 3 args and no return value, for received 3 parameters perform the multiplication**********`);

let multi = (num1,num2,num3) =>{
    console.log(num1*num2*num3);
}
console.log(`Multiplication of 3 argument`);
multi(5,5,2);
console.log(`Multiplication of 2 argument and 1 Default value`);
multi(10,4,1);

console.log(`************ With 5 args and return value received params it should do the addition ***********`);
let addition = (num1,num2,num3,num4,num5) => {
    const result = num1 + num2 + num3 + num4 + num5;
    return result;

}
const resultAdd = addition(100,100,200,349,756);
console.log(`Addition: ${resultAdd}`);


const word = ["I am","learing","ES6","features","in depth"];
console.log(`The concatenation of five values = ${word.join(" ")}`);













