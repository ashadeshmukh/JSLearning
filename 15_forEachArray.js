class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
    
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
//console.log(emp_anil);
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
//console.log(emp_radha);
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
//console.log(emp_rishi);
const emp_sonali = new Employee(66,"Sonali","Finance",40000,"Infy");
//console.log(emp_sonali);
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
//console.log(emp_monika);
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
//console.log(emp_viny);
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");
//console.log(emp_mahi);

// add all the created emp objects inside array 
const array_employess = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];


//const arrayEmployee = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

console.log("Find the employees whose name start with R....");
array_employess.forEach(employee => {
    let empName = employee.emp_name;
    if (empName.startsWith("R")) {
        console.log(employee);
    }
});

console.log("Infy employees total salary");
let totalSalaryOfInfy = 0;
array_employess.forEach(employee => {
    if(employee.emp_company=="Infy") {
        totalSalaryOfInfy = totalSalaryOfInfy + employee.emp_salary; 
    }
});
console.log(totalSalaryOfInfy);