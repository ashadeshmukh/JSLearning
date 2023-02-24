console.log(`......Arithmetic Operators........`);
var num1 = 10;
var num2 = 2;
//var num1 + num2;
var result = num1 + num2;//addition 
console.log(`Addition is ${result}`);

var subresult = num1 - num2;//substration 
console.log(`subtraction is ${subresult}`);

var mulresult = num1 * num2;
console.log(`multiplaction is ${mulresult}`);

var divresult = num1 / num2;
console.log(`division is ${divresult}`);

result = num1 ** num2;
console.log(`exponential is ${result}`);

console.log(10/3);
console.log(10%3);//modular

console.log(11%3);

console.log(15%3);

console.log(7%3);

result = num1 / 3;
console.log(`divisiton is ${result}`);

result = num1 % 3;
console.log(`modular is ${result}`);

result = 10 ** 2;

//compound operator

var num = 10; //compound addition +=
num+=20; //num= num + 20
console.log(`compound addition ${num}`);

console.log(`caparison operator`);
var num3 = 10;
console.log(num3==10);
console.log(num3==11);

var num3 = "10";
var num4 = 10;
console.log(num3==num4);//automatical conversonal

console.log(num3===num4);//stractal equal

console.log(num3 != num4);//!not
console.log(10 > 20);//> greater than

console.log(20 < 10);//<less than 

console.log(10<10);//<less than

var marks = 35;
console.log(marks > 35);// > greater than 

console.log(marks >= 35);// greater than equal

console.log(marks <= 35);// less than equal



// Ternary Operator 
var marks = 70;
var result = marks >= 60 ? "Allow Him for Interview" : "DON't allow";
console.log(result);

var age = 22;
var res = age >= 21 ? "congratalation....": "next time";
console.log(res);
console.log("EVEN OR ODD:");
var myNumber = 7;
// even - DIVIDE by 2 and reminder is 0
//console.log(myNumber%2==0);
var result = myNumber%2 == 0 ? "EVEN" : "ODD";
console.log(result);

var num1 = 10;
var num2 = 12;
var result = num1 > num2 ? num1 : num2;//small ya greater num
console.log(result);

function wordLength(word)
{
 var wordLength = word.length;
 var result = wordLength%2==0 ? "Even" : "ODD";
 return result;
}
wordLength("JavaScript");
console.log(`Word "JavaScript" has ${result} lenght`);

var result = wordLength("Google");
console.log(`Word "Google" has ${wordLength("Google Chrome")} length`);

function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);



  //String, number and Boolean 

  var myName = 10;
  console.log(typeof myName);

  var num1 = 10;
  var num2 = "32";
  console.log(num1==num2);//== operator automaticaly conversion 
  console.log(num1===num2);//=== 
 
  console.log(10 + "hi");//concate
  console.log("Operation 10-hi:",10-"hi");//not a number
  

