//Spread Operator
const array = [1,2,3,5,8,9];
console.log(array);
console.log(...array);

const student = {
    fullName : "Asha Deshmukh",
    age : 23,
    city : "Bergan"
}
console.log(student);
//console.log(...student);
//... Rest parameter
function show(...arg){
console.log(arg);
}
show(3,4,6,8,9);

// ... Rest Parameter
function show(arg1, ...arg){
    console.log(arg1, arg);

}
show(3, 4, 6, 8, 9);
