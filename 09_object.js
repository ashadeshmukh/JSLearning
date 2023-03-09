// information store
//let firstName = "Asha";
//let lastName = "Deshmukh";
//let isWorking = true;
//let age = 22;
//let collegeName = "ABC";
//let id = 12345;

let student = {
     firstName: "Asha",
     lastName: "Deshmukh",
     isWorking: false,
     age: 22,
     collegeName: "Netizes college latur",
     id: 123456,
      address: {
          street:"Makad",
          city:"Pune",
          id: "123456"
     },
     school: "Podar School",
     friends:[ "Bill", "Stew", "Elon"],
     show: function(){
          console.log("I am show() function");
     },
     addressDetails: function(){//datamember function
          return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`
       }
};

let resultAddress = student.addressDetails();
console.log(resultAddress);

student.show();//invoke function
console.log(student.friends);

console.log(student.friends[student.friends.length-1]);

console.log(student.id);

console.log(student.address.city);
student.address.pin="431205";//update
console.log();

console.log(student);
console.log(typeof student);

student.marks = {//add object 
     math: 80,
     physics: 60,
     drawing: 70
 }










//. DOT notation
console.log(student.firstName);
//[] Noration

console.log(student["lastName"]);
// update property
student.collegeName = "COEP PUNE";
console.log(student.age);

//Add new property city = "mumbai"
student.city = "Mumbai";
console.table(student);







