var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
var index=0;
console.log(`Total element is: ${arrayNumbers}`);
console.log(`Total element length is : ${arrayNumbers.length}`);
console.log(`=======================================================================================`);

console.log(`First element is: ${arrayNumbers[0]}`);
console.log(`Last element is: ${arrayNumbers[10]}`);
console.log(`==========================================================================================`);

//const totalArrayElements = arrayNumbers.length;
//console.log(arrayNumbers);
console.log(`Third Last Element is: ${arrayNumbers[8]} `);

console.log(`======================================================================`);

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
        if(element%2==0){
            //evenNumber.push(index);
            console.log(`Even Number is: ${element}`);
          } 
          //console.log(`Even Number is: ${arrayNumbers[index]}`); 
                 
    }

    console.log(`=========================================================================`);
    for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
        if(element%2!==0){
            console.log(`Odd Number is: ${arrayNumbers[index]}`);

        }
        
    }
    console.log(`========================================================================`);
    var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
     var sumEven = 0;
    for (let index = 0; index < arrayNumbers.length; index++) {
        
        const element = arrayNumbers[index];
            if(element%2===0) {
              //console.log(element);
              sumEven = sumEven + element;
           }
             // Update Expressio
     }
     console.log(`Sum of Even Number is: ${sumEven}`);

     console.log(`=========================================================================`);
     let oddSum = 0;
     for (let index = 0; index < arrayNumbers.length; index++) {
         const element = arrayNumbers[index];
         if(element%2!==0){
            oddSum = oddSum + element;
         }
    }  
    console.log(`Sum of Even Number is: ${oddSum}`);
    console.log(`==========================================================================`);
    

    let sum = 0;
    for (let index = 0; index < arrayNumbers.length; index++) {
        const elelemt = arrayNumbers[index];
        sum = sum +elelemt;    
        
   }
   console.log(`Sum of all elements: ${sum}`);
   console.log(`=========================================================================`);
   for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if ( element % 5 === 0) {
        console.log(`Number which are multiple of 5: ${element}`); 
    }
    
   }

   console.log(`==========================================================================`);
   console.log(`Is Number 115 available in arrayNumber?`);

   for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    let toCheckValue = 115; 
    if (element == toCheckValue) {
         console.log(true);
    }
  
   }
   console.log(false);

   console.log(`========================================================================`);
   console.log(`Is Number 23 available in arrayNumber?`);
   for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    let toCheckValue1 = 23;
    if (element == toCheckValue1) {
        console.log(true); 
    }
    
   }
   console.log(`=====================================================================`);
   console.log(`Insert Numbers: 55,56 before index 3`);
   
arrayNumbers.splice(3,0,55,56);
console.log(arrayNumbers);

console.log(`======================================================================`);
console.log(`Delete 3 elements starting from index 4 `);

const DeleteCount = arrayNumbers.splice(4,3);
console.log(arrayNumbers);
   




        
     



  
   













