console.log(`----------------------Create Class Bank and Object--------------------------------------`);
class Bank{
    constructor(bank_name,location,account_no,ifsc,interest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }
}
const axis_bank = new Bank("AXIS Bank","Pune",0001234567,"AXIS456321",10);
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
console.log(`************************************************************************************************`);
console.log(`======================Set traversing using for of loop=========================`);

const setOfBanks = new Set;
setOfBanks.add(axis_bank);
setOfBanks.add(sbi_bank);
setOfBanks.add(icici_bank);
setOfBanks.add(kotak_bank);
setOfBanks.add(hdfc_bank);
setOfBanks.add(panjab_bank);

for (const Bank of setOfBanks) {
    console.log(`Bank Name:${Bank.bank_name}, Location:${Bank.location}`);
    //console.log(`------------------------------------------------------------------------`);
}



