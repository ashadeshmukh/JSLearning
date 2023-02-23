
console.log(`******************************Step1********************`);
function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : `${boyName} Not eligible for marriage` ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);

 var result1 = maleMarriageEligibility("Male", 17, "Stew Jobs");
 console.log(result1);

 console.log(`**********************************step2************************`);

 function femaleMarriageEligibility(gender, age, girlName){
    var femaleResult = (gender =="Female" && age>=18) ? `Hey ${girlName} you are eligible for marriage` : `${girlName} Not eligible for marriage`;
    return femaleResult; 
 }
 var femaleResult = femaleMarriageEligibility("Female", 16, "Jenifer");
 console.log(femaleResult);

 var femaleResult1 = femaleMarriageEligibility("Female", 27, "Malinda Gates");
 console.log(femaleResult1);