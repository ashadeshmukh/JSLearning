

const arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const valueAtIndex0 = arraySeasonalFruits[0];//
console.log(`First elements is: ${valueAtIndex0}`);

const valueAtIndex4 = arraySeasonalFruits[4];
console.log(`Last elements is: ${valueAtIndex4}`);

console.log(`-----------------------------------------------------------------------`);

console.log(`+++++++ADD ELEMENT Papaya BEFORE THE ELEMENT 'Banana'++++++++++++`);
arraySeasonalFruits.unshift("Papaya");
console.log(arraySeasonalFruits);
console.log(`-----------------------------------------------------------------------`);

console.log(`++++++Remove "Mango" from the array++++++++++`);
const splicedArrayDeleteCount = arraySeasonalFruits.splice(4,1);
//console.log(`Removed elements using deleteCount is: ${splicedArrayDeleteCount}`);
console.log(arraySeasonalFruits);
console.log(`--------------------------------------------------------------------`);

console.log(`+++++++++++ Add element or insert an element "Pineapple" at the last position +++++++++++++++++++`);

arraySeasonalFruits.push("Pineapple");
console.log(arraySeasonalFruits);
console.log(`-----------------------------------------------------------------------`);

console.log(`+++++++++++ Insert an element "Dragon Fruit" Before "Water Melon"`);

arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(arraySeasonalFruits);
console.log(`-----------------------------------------------------------------------`);

console.log(`++++++++++++Replace with element "Orange" with "Kiwi"+++++++++++++`);
arraySeasonalFruits.splice(2,1,"Kiwi");
console.log(arraySeasonalFruits);

console.log(`------------------------------------------------------------------`);

console.log(`++++++++++ Elements Starting from index 1 to 4 ++++++++++++++++`);
const subArray = arraySeasonalFruits.slice(1,5,6);
console.log(subArray);

console.log(`---------------------------------------------------------------`);
console.log(`++++++++++Last 3 element using length property ++++++++++++++`);

const totalArrayElements = arraySeasonalFruits.length;
console.log(arraySeasonalFruits);

const subArray1 = arraySeasonalFruits.slice(4,7);
console.log(subArray1);








