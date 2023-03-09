let professor ={
    name:"Anandrao Magar",
    subject:"Maths",
    qualification:"MSc(math)",
    age:45,
    deptName:"BCA",
    city:"Latur",
    totalExperience:"14 years",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing"
    },
    certificates:["Hacker Rank Participation","Certificate in IFE course","Certificate in Adc Programming"],
    degreesDetails: function() {
        console.log(` engineering: ${this.degrees.engineering},PHD: ${this.degrees.PHD}` ); 
    }
};
console.log(`------------------------------All properties of professor object-------------------------`);
console.log(professor);

console.log(`-----------------------------Include nested object 'degress'-------------------------------`);
let resultdegreesDetails = professor.degreesDetails();
console.log(resultdegreesDetails);

console.log(`---------------------------Add one arrary'certificates'-----------------------`);
console.log(professor.certificates);

console.log(`----------------------------Add function Total degres are:----------------------------------`);
professor.degreesDetails();

console.log(`---------------------------Add new property 'totalExperience'-------------------------`);

console.log(`Total Experience of Professor is:${professor.totalExperience}`);

console.log(professor);

console.log(`---------------------------Modify and existing property---------------------------------`);
//student.collegeName = "COEP PUNE";
professor.age = 40;
console.log(`age:${professor.age}`);

//console.log(professor);
console.log(`------------------------------Add new certificate"Oracle Certified" at the end of array `);
professor.certificates.push("Oracle Certified");
console.log(professor.certificates);


















