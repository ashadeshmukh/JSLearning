
console.log(`========================== Factoral of a number==============================`);

function factorialOfNum(num) {
  let fact = 1;

  if (num === 0) {
    console.log(`Factroil of number 0 is 1`);

  } else if (num < 0 || typeof num === 'undefined' || num==null ||isNaN(num)) 
    {
    console.log(`Enter invalid value ${num}`);
  } else {
    for (let index = num; index>0; index--) {
      fact = fact * index;
    }
    console.log(`The factorial of ${num} is ${fact}`);
  }
  
}

factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);


console.log(`*********************************************************************************************`);

