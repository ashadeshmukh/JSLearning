
//let akshyFN = "Akshay Ghule";
//let nayanFN = "Nayan Patil";

let arrayOfNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, "Nine", "Ten"];
console.log[arrayOfNumber];
//console.table[arrayOfNumber];
const totalArrayElements = arrayOfNumber.length;
console.log(`Total elements available in array is: ${totalArrayElements}`);

const is8Available = arrayOfNumber.includes(8);
console.log(`Is 8 available: ${is8Available}`);


const is9Available = arrayOfNumber.includes(9);
console.log(`Is 9 available: ${is9Available}`);

const indexOf8 = arrayOfNumber.indexOf(8);
console.log(`Index of 8 element is: ${indexOf8} `);

const indexOf100 = arrayOfNumber.indexOf(100);
console.log(`Index of 100 element is: ${indexOf100} `);

var arrayOfNumbers = [10, 20, 25, 15, 30, 5];
const valueAtIndex2 = arrayOfNumbers[2];
console.log(`value at index 2 is: ${valueAtIndex2}`);

arrayOfNumbers[3]= 35;//update value 
console.log(arrayOfNumbers);

arrayOfNumbers[1]= 50;
console.log(arrayOfNumbers);

var arrayOfNumbers = [10,20,25,15,30,5];//add element 
console.log(`=========adding element in the last using push()`);
arrayOfNumbers.push(40);//add in last element 
console.log(arrayOfNumbers);
console.log(`==========adding element in the first using unshift() :`);
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);

var arrayOfNumbers = [10, 20, 25, 15, 30, 5];
console.log('==========Removing last elelemt using pop():');
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
console.log(`======Removing first element using shift():`);
arrayOfNumbers.shift();
console.log(arrayOfNumbers);

var arrayOfNumbers = [10, 20, 25, 15, 30, 5, 40, 45];
console.log(`====slice(startIndex)===`);
const arraryFromIndex3 = arrayOfNumbers.slice(3);
console.log(arraryFromIndex3);

console.log(`===slice(srartIndex, endIndex)===`);
const subArray = arrayOfNumbers.slice(2, 5);
console.log(subArray);

var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log(`=== splice(starIndex)==`);
const spliceArray = arrayOfNumbers.splice(3);
console.log(`Remove elements from array is :${spliceArray}`);
console.log(arrayOfNumbers);

var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log(`====splice(startIndex, endIndex)====`);
const splicedArrayDeleteCount = arrayOfNumbers.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayDeleteCount}`);
console.log(arrayOfNumbers);

var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(1,1);
console.log(arrayOfNumbers);

arrayOfNumbers.slice(3,1);
console.log(arraryFromIndex3);

var arrayOfNumbers = [10,20,25,15]
arrayOfNumber.slice(1,2);
console.log(arraryFromIndex3);

console.log(`=================splice() to insert one elements without replacing existing elements======================`);
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2,0,22);
console.log(arrayOfNumbers);

console.log(`===========splice() to insert multiple elements without replacing existing element =========`);
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];//5,35,55
arrayOfNumbers.splice(4, 0, 5, 35, 55);
console.log(arrayOfNumbers);

console.log(`======splice() to replace one elements============`);
var arrayOfNumbers= [10, 20, 25, 15, 40, 45 ];
arrayOfNumbers.splice(2,1,50,60);
//arrayOfNumbers.splice(2,3,50,60);
console.log(arrayOfNumbers);

console.log(`==========Traversing =============`);

console.log("===== Traversing  ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
let sum = 0; // 10
for (let index = 0; index < arrayOfNumbers.length; index++) {//1
    const element = arrayOfNumbers[index];
   sum = sum + element;// sum = 0 + 20
    // console.log(element);
}
console.log(`Sum of an Array element is: ${sum}`);
















//console.log(arrayOfNumber.length);