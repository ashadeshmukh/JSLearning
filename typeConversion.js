//numeric string used with + gives string type 
console.log(`Implicit Conversion to string`);
var result;

result = '3' + 2;
console.log(`resutl of "3"+2 is:${result}`);

result = '3' + true;
console.log(`result of '3' + true is :${result}`);

result = '3' + undefined;
console.log(`result of '3' + undefined is: ${result}`);

result = '3' + null;
console.log(`result of '3' + null is: ${result}`);

console.log(`******************************************************`);

console.log(`Implicit boolean conversion to Number`);
//if boolean is used, true is 1, false is 0
var result;

result = '4' - true;
console.log(`result of '4' - true is:${result}`);

result = 4 + true;
console.log(`result of 4 + true is:${result}`);

result = 4 + false;
console.log(`result of 4 + false is: ${result}`);

result = 4 - false;
console.log(`result of 4 - false is:${result}`);

console.log(`******************************************************`);
console.log(`Implicit string conversion to Number`);
// numeric string used with -,/,* result number type
var result;

result = '4'-'2';
console.log(`result of '4' -'2' is:${result}`);

result = '4' - 2;
console.log(`result of '4' - 2 is : ${result}`);

result = '4' * 2;
console.log(`result of '4' * 2 is: ${result}`);

result = '4' / 2;
console.log(`result of '4' / 2 is:${result}`);

console.log(`**********************************************`);
console.log(`Undifined used with number, boolean or null given NaN`);
//Arithmetic operation of undefined with number, boolean or null gives NaN

var result;
result = 4 + undefined;
console.log(`result of 4 + undefined is : ${result}`);

result = 4 - undefined;
console.log(`result of 4- undefined is : ${result}`);

result = true + undefined;
console.log(`result of true + undefined is : ${result}`);

result = null + undefined;
console.log(`result of null + undefined is : ${result}`);

console.log(`***************************************************************`);

console.log(`Explicit conversion: Convert number string and boolean values to numbers in that case we can use Number();`);

// string to number;

var result;

result = Number('324');
console.log(`result of Number('324') is : ${result}`);

result = Number('324e-1');
console.log(`result of Number('324e-1') is: ${result}`);

//boolean to Number


//result1 = Number(ture);
//console.log(`result of Number(true) is: ${result1}`);

//result = Number(false);
//console.log(`result of Number(false) is: ${result}`);