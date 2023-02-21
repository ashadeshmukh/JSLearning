console.log("..........1.two function with no arguments and no return type................");

function hobbies(){
console.log("My hobbies is Making Friends");
}
hobbies();

function food(){
console.log("I Like you Dosa");
}
food();

console.log("............2.write the function..................");
function personalDetails(firstName, lastName, collegeName){
console.log("My First Name:",firstName);
console.log("My Last Name:",lastName);
console.log("My College Name:",collegeName);
}
 personalDetails('Asha','Deshmukh','COCSIT College Latur');
// personalDetails('Deshmukh');
 //personalDetails("COCSIT College Latur");
 console.log('...........3.FUNCTION WITH ARGS AND NO RETURN..........');
 var str1= "virat";
 var str2= "Anushk";

 var num1 = 1000;
 var num2 = 2000;
 
 
 function swapValuesDude(value1,value2){
    console.log("Before swap value:",value1,value2);
    var temp = value1;
        value1= value2;
        value2= temp;
    console.log("After swap value:", value1,value2);
    return "swapping variables successfuly completed";    
 }
 var swapResult = swapValuesDude(str1,str2);
 console.log(swapResult); 

 var swapResult2 = swapValuesDude(num1,num2);

 console.log("..........4.Three parameters or arguments and its should return the addition...................");

 function addThreeValues(num1,num2,num3){
    var sum = num1+num2+num3;
    return sum;
 }
 var sumResult = addThreeValues(10.23,600,40);
 console.log('Sum of values:',sumResult);

var greeting = addThreeValues("Hello" ,"Good", "Morning");
console.log(greeting);

 
