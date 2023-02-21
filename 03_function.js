
var num1 = 100;
var num2 = 200;

var str1 = "sweety";
var str2 = "cutey";

function swapVariables(value1, value2){ //var value=num1, value=num2
    console.log("Before swap:",value1,value2);
    var temp = value1;
    value1=value2;
    value2 = temp;
    console.log("After Swap:", value1, value2);
    return "swapping variables successsfully completed";

}
var swapResult = swapVariables(num1,num2);//fuction call or function invoke
console.log(swapResult);

var swapResult2 = swapVariables(str1,str2);
console.log(swapResult2);

function display(num){
    console.log(num);//100
    var result = typeof num;//number
    return result;
}
var displayResult = display(100);
console.log(displayResult);

//function with no arguments and no return value

function showFullName(){
console.log("MY full Name is: Asha Dinesh Deshmukh");

}

showFullName();//funcion call or invoke
//function with argument and no retun value 

function showAge(age){
    console.log("My age is:",age);

}
showAge(30);

//function with no argument and no return value
function fullName(){
    var name = "ASHA DESHMUKH";
    return name;
}
var fName = fullName();
console.log(fName);

//function wiht arguments and return value
function sumOfNumbers(num1,num2,num3){
    var sum = num1+num2+num3;
    return sum;

}
var sumResult = sumOfNumbers(10,45,79);
console.log(sumResult);

var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1= "pari";
var name2 = "swati";

function swapVariables(value1, value2)
{
console.log("Before SWAP:",value1, value2);
var temp = value1;
value1 = value2;
value2 = temp;
console.log("After Swap: ", value1, value2);
return "Swapping variables successfully completed";
}
var swapResult = swapVariables(num1, num2); // Function call or Function invoke
  console.log(swapResult);
  
var swapResult2 =  swapVariables(str1, str2);
  console.log(swapResult2);

  