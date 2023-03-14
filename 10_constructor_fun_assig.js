function Bank(bankName,location,ifscCode,branchCode) {
        this.bankName = bankName;
        this.location = location;
        this.ifscCode = ifscCode;
        this.branchCode = branchCode;
        this.show = function(){
            console.log(`${this.bankName} ${this.location} ${this.ifscCode} ${this.branchCode}`);
        }
}

Bank.prototype.openTime ="9 AM IST";
Bank.prototype.closeTime="6 PM IST";
console.log(`******************Object of Function Constructor****************`);

const yesBank = new Bank("YES BANK", "Pune", "YES001524367", "YES24367");
//yesBank.show();
console.log(`Bank Details is: ${yesBank.bankName},${yesBank.location},${yesBank.ifscCode},${yesBank.branchCode}`);

console.log(`---------------------------------------------------`);
//console.log(yesBank.openTime);
const sbiBank = new Bank("State Bank Of India", "Latur", "SBI4562352", "SBI562314");
//sbiBank.show();
console.log(`Bank Details is: ${sbiBank.bankName},${sbiBank.location},${sbiBank.ifscCode},${sbiBank.branchCode}`);
console.log(`------------------------------------------------------`);

const mahBank = new Bank ("Maharashtra Bank of India", "Nanded", "MAH85632145", "MAH45623");
//mahBank.show();
console.log(`Bank Details is: ${mahBank.bankName},${mahBank.location},${mahBank.ifscCode},${mahBank.branchCode}`);
console.log(`-------------------------------------------------`);

const axisBank = new Bank ("Axis Bank","Mumbai","AXIS123456","AXIS45236"); 
//axisBank.show();
console.log(`Bank Details is: ${axisBank.bankName},${axisBank.location},${axisBank.ifscCode},${axisBank.branchCode}`);

console.log(`*****************Adding Data Member using prototype**********************`);

console.log(`SBI Bank Open time:${sbiBank.openTime} and Closing time:${sbiBank.closeTime}`);

console.log(`--------------------------------------------------------------`);

console.log(`Axis Bank Timing :${axisBank.openTime} and ${axisBank.closeTime}`);

console.log(`----------------------------------------------------------------------`);

console.log(`Bank Name: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode} and Yes Bank Open Time:${yesBank.openTime}`);
