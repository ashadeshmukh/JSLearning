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

console.log(`*********1.Find all the employees working in "TCS"*****************`);
//for (let index = 0; index < array_employess.length; index++) {
    //const element = array_employess[index];
    //if(Employee.emp_company == "TCS"){
      //  console.log(`Employee Details:${Employee.emp_name},${Employee.emp_company}`);
    //}
    
//}


    for (let index = 0; index < array_employess.length; index++) {
        const emp = array_employess[index];
        if(emp.emp_company == 'TCS'){    
            console.log(`Employee Details:Employee Name: ${emp.emp_name}, Employee Company: ${emp.emp_company}`); 
        }   
    }
 
    console.log(`**************2."Finance" department employees****************`);

    for (let index = 0; index < array_employess.length; index++) {
        const emp = array_employess[index];
        if(emp.emp_dept == 'Finance'){
            console.log(`Employee Details:Department: ${emp.emp_dept}, Employess Name: ${emp.emp_name}`);
        }
        
    }
    
    console.log(`*********** 3.Employee Whose Name starts with 'R'*****************`);
    for (let index = 0; index < array_employess.length; index++) {
        const emp = array_employess[index];
        if(emp.emp_name.startsWith('R')){
            console.log(`Emp Id:${emp.emp_id}, Emp Name:${emp.emp_name}, Emp dept:${emp.emp_dept}, Emp salary:${emp.emp_salary}, Emp Company:${emp.emp_company}`);
        }
        
    }

    console.log(`*********** 4.Employee whose salary is greater than 75000************`);
    for (let index = 0; index < array_employess.length; index++) {
        const emp = array_employess[index];
        if(emp.emp_salary > 75000){
            console.log(`Employee Details: Emp Name:${emp.emp_name}, Emp Company:${emp.emp_company}, Emp Salary:${emp.emp_salary}`);
        }
        
    }

    console.log(`*********** 5.Employee whose salary greater than or equal 50000 and from "IT" department ***********`);

    for (let index = 0; index < array_employess.length; index++) {
        const emp = array_employess[index];
        if(emp.emp_salary>=50000 && emp.emp_dept == 'IT'){
            console.log(`Emp Id:${emp.emp_id}, Emp Name:${emp.emp_name}, Emp dept:${emp.emp_dept}, Emp salary:${emp.emp_salary}, Emp Company:${emp.emp_company}`);

        }
        
    }

    console.log(`***************** 6.All the Employees from company "Infy"**************************`);
    for (const emp of array_employess) {
        if (emp.emp_company == 'Infy') {
            console.log(`Emp Id:${emp.emp_id}, Emp Name:${emp.emp_name}, Emp dept:${emp.emp_dept}, Emp salary:${emp.emp_salary}, Emp Company:${emp.emp_company}`); 
        }
        
    }
    
   
    

