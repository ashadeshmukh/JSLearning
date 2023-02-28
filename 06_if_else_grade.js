console.log(`***************TASK 1**********************`);
function voteElifibility(age){
   
    if (age >= 18) {
        console.log(`congratualations! Your age is:${age} eligible for voting`);
        
    } //if(age< 0 || age == undefined || age==null){//unhappy path 
        //return `invalid age ${age} pls provide valid age`;
    
    else{
        console.log(`Your age is ${age} not eligible for voting`);
    }
  
}
voteElifibility(45);
voteElifibility(17);
voteElifibility(8);
voteElifibility(20);
voteElifibility(-10);
voteElifibility(0);
voteElifibility(undefined);
voteElifibility(null);

console.log(`********************************************************`);
console.log(`****************TASK 2**********************`);

function gradeCalculation(marks){
    if (marks>=90 && marks!=150) {
        console.log(`Funtastic marks:${marks},Your grade is A+`); 
    }else if (marks>=75 && marks<90) {
        console.log(`Excellent marks ${marks},your grade is A`);
    }else if (marks>=50 && marks<75) {
        console.log(`Good marks ${marks},your grade is B`);
    }
    else if (marks>=35 && marks<50) {
        console.log(`Marks is ${marks},your grade is c,Need improvement`);   
    }

    // if marks is 0 or less than 0 or greater than 100 or not in valid number format 
    // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
    else if(marks<=0 || marks >=100|| (typeof marks!="number")||(isNaN(marks)))
    {
        console.log(`Your mark ${marks} Please provide the valid marks`);
    }
    else{
        console.log(`not valid marks`);
    }
}
     
    gradeCalculation(98);
    gradeCalculation(80);
    gradeCalculation(90);
    gradeCalculation(0);
    gradeCalculation(150);
    gradeCalculation(-7);
    gradeCalculation(35);
    gradeCalculation(29);
    gradeCalculation(64);
    gradeCalculation(49);
    gradeCalculation("91");
    gradeCalculation("Eighty");
    gradeCalculation(NaN);
    gradeCalculation(null);


    