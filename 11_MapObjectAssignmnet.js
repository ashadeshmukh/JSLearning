console.log(`**********************Create Class and Object*********************************`);
class Bank{
    constructor(bankName,location,accountNo,ifsc,interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc =ifsc;
        this.interestRate = interestRate;
    }
}

const axis_bank = new Bank("AXIS Bank","Pune",34567,"AXIS456321",10);
const sbi_bank = new Bank("State Bank Of India","Mumbai",1234567,"SBI456321",15);
const icici_bank = new Bank("ICICI Bank","Nanded",78546321,"ICICI45632",12);
const kotak_bank = new Bank("KOTAK Bank","Beed",65321456,"KOT789654",13);
const hdfc_bank = new Bank("Hdfc Bank","Sambaji Nagar",2365489,"HDFC5668999",20);
const panjab_bank = new Bank("Panjab Bank","Hingoli",75896432,"PAN4563217",15);

console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(panjab_bank);
console.log(`*************************Create Map of accountNo object************************************`);

const mapOfBank = new Map;

mapOfBank.set(0001234567,axis_bank);
mapOfBank.set(1234567,sbi_bank);
mapOfBank.set(78546321,icici_bank);
mapOfBank.set(65321456,kotak_bank);
mapOfBank.set(2365489,hdfc_bank);
mapOfBank.set(75896432,panjab_bank);

console.log(mapOfBank);
console.log(`******************Traverse Map with bankName, accountNo, interestRat ***********************`);
const arrayBank =[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank];
for (const Bank of arrayBank) {
    console.log(`Bank Name:${Bank.bankName}, Account No.:${Bank.accountNo}, Interest Rate:${Bank.interestRate}`);

}
//const element = mapOfBank.get("YES_33")







