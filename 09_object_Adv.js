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