
console.log(`Find the greatest number amongst two number`);
function greaterNumber(num1,num2){
    if(num1 >= num2){
        console.log(`${num1} is greater number`);
        //console.log(greaterResult) ;  
    }
    else {
        console.log(`${num2} is greater number`);
    }   
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`*************************************************`);
console.log(`Check Even or odd numbers`);

function isEvenOrOddNum(num){
    if(num%2===0){
        
        console.log(`${num} is Even number `);
    }
    else{
        console.log(`${num} is odd number`);

    }
    
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`**************************************************`);
console.log(`STEP 1.`);
console.log(`Assignment 0B`);
function maleMarriageEligibility(gender,age,boyName){
    if (gender == 'male' && age>=21) {
        var str =`Hey${boyName} you are eligible for Marriage `
        return str;
    }
    else{
        var str =`${boyName} Not eligible for Marriage`;
        return str;
    }

}
var result = maleMarriageEligibility("Male",25,"Billgates");
console.log(result);
var result = maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(result);

console.log(`************************************************`);
console.log(`STEP 2.`);

function femaleMarriageEligibility(gender,age,girlName){
    if (gender == "Female" && age>=18) {
        console.log(`Hey ${girlName} you are eligible for Marriage`);
    }
    else {
        console.log(`${girlName} not eligible for marriage`);
    }
        
    }

femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(`*************************************************`);

console.log(`Assignment 0C`);

function tcsInterview(gradScore,hscScore,sscScore,candidateName){
   if (gradScore>=70 || hscScore>=80 || sscScore>90) {
    console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
    
   }
   else{
    console.log(`${candidateName} Unfortunately you are not eligible for interview`);
   }

}
tcsInterview(80,86,90,"ASHA");
tcsInterview(70,65,55,"Akshada");
tcsInterview(60,79,88,"shital");