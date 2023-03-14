const arrayNums=[20,3,4,56,90,400,49]
console.log(`Given Array:${arrayNums}`);

console.log(`======================= Shallow clonning on array=================================`);
const ClonedArray =[...arrayNums];
console.log(`Cloned Array:${ClonedArray}`);

console.log(`============ Update cloned array with values --> 55,66 using push()=============`);
const newArray = arrayNums;
newArray.push(55,66);
console.log(`Original Array:${arrayNums} Clone Array:${newArray}`);

console.log(`============= Deep Clone  using spread operator=================`);
const newArray1 = arrayNums;
newArray.push(10,25);
//console.log(`${newArray1}`);
const resultArray = [...newArray];
console.log(`Clone Array:${resultArray} Original Array:${ClonedArray} `);

console.log(`=============New Array Created ==============================`);
const arrayEven =[2,30,14,8];
console.log(`New Array Created:${arrayEven}`);

console.log(`=============arrayNums and arrayEven merged=====================`);
const mergedArray = arrayEven + arrayNums;
console.log(`Merged Array: ${mergedArray}`);

console.log(`-----------------------------------------------------------------------------------------------`);
console.log(`==================== Creat employee_info object =====================`);
const employee_info ={
    emp_id: 27,
    emp_name:"John Doe",
    salary:{
        july_month: "40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli, 431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88", "1800 - 4567 32", "+91-9096 5678 77"]
}
console.log(employee_info);

console.log(`--------------------------Employee Details-----------------------`);
console.log(`Address: Colony:${employee_info.address.locality.colony}, Street:${employee_info.address.locality.street} City:${employee_info.address.city} State:${employee_info.address.state} Country:${employee_info.address.country}`);
console.log(`Mobile numbers:${employee_info.mobiles}`);

console.log(`---------------------------------------------------------------------------------------------------`);
console.log(`====================== Perform deep copy using JSON.stringfy()========================`);
const newEmployeeSalary = JSON.parse(JSON.stringify(employee_info));
employee_info.salary.july_month="80K";
console.log(`Employee Original July Month Salary:${newEmployeeSalary.salary.july_month}`);
console.log(`Employee Updated July Month Salary:${employee_info.salary.july_month}`);

console.log(`----------------------------------------------------------------------------------------`);

const newEmployeeCountry= JSON.parse(JSON.stringify(employee_info));
employee_info.address.country = "United Kingdom";

console.log(`Employee Original Country:${newEmployeeCountry.address.country}`);
console.log(`Employee Updated Country:${employee_info.address.country}`);












