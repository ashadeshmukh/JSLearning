const employee ={
    id: 124567,
    name:"Elon Musk",
    country:"US",
    city:"Silicon Valley"

}

for (const key in employee) {
    //console.log(key);
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key, element);//traversal array
          
    }
}
console.log("==== in operator =====");
 const isIdAvailable = "id" in employee;
 console.log(isIdAvailable);

const keyOfEmployee = Object.keys(employee);
console.log(keyOfEmployee);

const valuesOfEmployee = Object.values(employee);
console.log(valuesOfEmployee);

const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee[0][0]);//return array of array 

const player = {
    fullName: "Virat Kohli",
    totalCenturies : 46,
    isMarries: true
}
Object.freeze(player);
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed
delete player.totalCenturies;// deleting property - Not allowed as object is freezed
player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed

console.table(player);
console.log(`----------------Merge to object-----------------`);

const student = {
    firstName: "Elon",
    lastName:"Musk",
    age:54
}
const address ={
    counntry:"US",
    city:"Silicon Valley",
    PIN: "qa2356"
}

// First way 
const mergedObject = Object.assign({}, student, address);
console.table(mergedObject);

// Second way 
const newObject = {};
Object.assign(newObject, student, address);
console.table(newObject);

//  Third way
Object.assign(student, address);
console.table(student);

//  Fourth way
Object.assign(address, student);
console.table(address);


