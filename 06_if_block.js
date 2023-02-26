console.log("Start");
var num = 10;
if(num>0){
console.log(`Number is positive ${num}`);
}
console.log("End");


var ageForVote = 20;
if(ageForVote>=18){
    console.log(`You are eligible for voting`);
   
}
console.log(`Age is : ${ageForVote}`);
console.log(`END of next if block`);

function checkEvenOdd(num){
  if(num%2==0){
    return "even";
  }
  if(num%2!=0){
     return "odd";
  }
}

var result=checkEvenOdd(45);
console.log(`Givern Number 45: ${result}`);

var result=checkEvenOdd(70);
console.log(`Givern Number 70: ${result}`);

//using if else statement 
var num1 = 5;
if(num1>0){
    console.log(`Number${num1} is positive:`);
}
else{
    console.log(`Number${num} is Negative`);
}

//assignment 
function maleMarriageEligibility(gender, age,boyName){
    if (gender=="Male" && age>=21) {
        console.log(`${boyName} You are eligible`);
    } else {
        console.log(`${boyName} Not Eligible`);
    }
}
maleMarriageEligibility("Male", 25,"Billgates");
maleMarriageEligibility("Male", 20,"Anil");