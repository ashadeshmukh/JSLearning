
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];


console.log(`=======Add 10 into each element Using map()========`);
const arrayAdd = arrayNumbers.map( (element) => {
   return element + 10;
} )
console.log(arrayAdd);

console.log(`===== Square the each array element Using map()=======`);
const arraySquare = arrayNumbers.map((element)=>{
    return element * element;
})
console.log(arraySquare);

console.log(`===== Add the index value into its corresponding each array element ======`);
const arrayNew = arrayNumbers.map((element,index)=>{
    return element + index;
})
console.log(arrayNew);