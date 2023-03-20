
'use strict'
//myName = "Virat"; // Not allowed
let myName = "Virat";
console.log(myName);
//delet myName;//not allowed 

//person = {  // Not allowed to define an object without var, let and const
  //  firstName: "Virat",
    //lastName: "Kohli",
    //age : 33
//}

const student = {
    rllNo:34,
    age:17,
    city: "Pune"
}
//student = null;
//delete student;//not allowed in strict mode 

function show(arg1,arg2=1){
    console.log(arg1,arg2);

    console.log(arg1/arg2);

}
show(100);
show(100,101);





