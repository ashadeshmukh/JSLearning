
class Bank {
    constructor(bankName, location, account, ifsc, interestRate){
        this.bankName=bankName;
        this.location=location;
        this.account=account;
        this.ifsc=ifsc;
        this.interestRate=interestRate;
    }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
    }
}

const sbiBank = new Bank("SBI Bank", "Wakad", "62453214545","SBI000123456",10.75);
console.log(sbiBank);

const axisBank = new Bank("Axis Bank", "Bajirao Road,Pune","8564231879","AXIS00213654",11.20);

function traversObject(bankObject){
    for (const key in bankObject) {
        if (bankObject.hasOwnProperty.call(bankObject, key)) {
            const element = bankObject[key];
            console.log(`${key}:${element}`);
            
        }
    }
  

}

class Person {
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;
    }
}
const personDhoni = new Person("MS Dhoni", "Ranchi");
const personShubham = new Person("Shubham Gill", "Mumbai");

console.log(personDhoni instanceof Person);
console.log(personShubham instanceof Bank);
console.log(sbiBank instanceof Bank);
