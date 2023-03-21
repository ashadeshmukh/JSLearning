const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`======= 1. array element with its index using forEach() with arrow function ==========`);

arrayNumbers.forEach ((index,value) => {
    console.log(`value of array:${index}, index:${value}`);

});

console.log(`===== 2. Find the positive Number with foreach() arrow function ============`);

arrayNumbers.forEach((num) =>{
    if (num>=0) {
        console.log(`Positive Number:${num}`); 
    }
});

console.log(`==== 3. Find the Negaive Number with foreach() arrow function =======`);

arrayNumbers.forEach((num) =>{
    if(num < 0){
        console.log(`Negative Number:${num}`);
    }

});

console.log(`===== 4. Even Number with foreach() arrow function ======= `);
arrayNumbers.forEach((num)=>{
    if(num%2==0){
        console.log(`Even Number: ${num}`);
    }
});

console.log(`==== 5. Sum of all elements =========`);

    let sum =0;
    arrayNumbers.forEach((element) => {
        sum = sum+ element;
    });
    console.log(`SUM of all array: ${sum}`);    

console.log(`======== 6. Even index value =========`);

arrayNumbers.forEach((element, index)=>{

        if (index % 2 === 0)
        {
          console.log(`Even index value:${element}`);
        }
    });




