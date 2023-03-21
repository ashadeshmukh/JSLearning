class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33,"Rasha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88,"Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employess = [emp_anil,emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`========= Find out the "TCS" Employee details==========`);
array_employess.forEach(Employee => {
    if(Employee.emp_company =='TCS') {
        console.log(`Employee Name: ${Employee.emp_name}, Company Name: ${Employee.emp_company}`);
        
    }
});

console.log(`======== Find out the Employees with salary greater than or equal 50000 ======`);
array_employess.forEach(Employee=>{
     if(Employee.emp_salary >= 50000){
        console.log(`Emp Id: ${Employee.emp_id}, Emp Name: ${Employee.emp_name}, Emp Dept: ${Employee.emp_dept}, Emp Salary:${Employee.emp_salary}, Company Name:${Employee.emp_company}`);
     }
});

console.log(`======= Total employess salary ==========`);
let totalSalaryOfInfy = 0;
array_employess.forEach(Employee => {
    //if(Employee.emp_company=="Infy") {
        totalSalaryOfInfy = totalSalaryOfInfy +Employee.emp_salary; 
    //}
});
console.log(`Sum of total emp salary:${totalSalaryOfInfy}`);

console.log(`========== Average of Salary ============`);
let totalSalaryOfInfy1 = 0;
let avg = 0;
array_employess.forEach(Employee => {
   
        totalSalaryOfInfy1 = totalSalaryOfInfy1 + Employee.emp_salary; 
        avg = totalSalaryOfInfy1 / array_employess.length;
    
});
console.log(`Average of salary:${avg}`);

console.log(`===== "IT" Or "HR" department emp whose salary >= 75000 ========`);
array_employess.forEach(Employee =>{
    if((Employee.emp_dept == "IT" || Employee.emp_dept == "HR") && (Employee.emp_salary >=75000)){
        console.log(`Emp Id: ${Employee.emp_id}, Emp Name: ${Employee.emp_name}, Emp Dept: ${Employee.emp_dept}, Emp Salary:${Employee.emp_salary}, Company Name:${Employee.emp_company}`);
    }
}
    )


