
console.log("Start");
var num = 
10;
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
    if(age<0 || age == undefined){//unhappy path 
        return  `Hey ${boyName} your are ${age} is not valid`;
    }
    if (gender=="Male" && age>=21) {
        console.log(`${boyName} You are eligible`);
    } else {
        console.log(`${boyName} Not Eligible`);
    }
}

maleMarriageEligibility("Male", 25,"Billgates");
maleMarriageEligibility("Male", -20,"Anil");

console.log(`********************************************`);
function maleMarriageEligibility(gender,age, boyName){
    if (age < 0 || age==undefined ) {
        return `Hey ${boyName} your age ${age} is not valid`;
    }
    if (gender=="Male" && age>=21) {
       var str = `Hey ${boyName} you are eligible for marriage`;
       return str;
    } else {
        var str = `${boyName} you are not eligible for marriage`;
        return str;
    }

}
var result = maleMarriageEligibility("Male", 21, "Billgates");
console.log(result);

var result = maleMarriageEligibility("Male", -30, "Shivam");
console.log(result);
var result = maleMarriageEligibility("Male", undefined, "Raju");
console.log(result);
