
const sbiBank= {
    bankName:"State Bank of India",
    location:"Pune",
    accountNo:123456789,
    ifsc:"sbi45623",
    interestRate:14,
    showDetails: function() {
        console.log(`Bank Name:${this.bankName},Location:${this.location},Account No:${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);
    }

}
console.log(`--------------------------SBI BANK DETAILS------------------------------`);
sbiBank.showDetails();
console.log(`--------------------------AXIS BANK DETAILS------------------------------`);

 const axisBank={
    bankName:"Axis Bank",
    location:"Latur",
    accountNo:45632178,
    ifsc:"axis23654",
    interestRate:15,
    showDetails:function() {
        console.log(`Bank Name:${this.bankName},Location:${this.location},Account No:${this.accountNo},IFSC CODE:${this.ifsc},Interest Rate:${this.interestRate}`);
        
    }
}
axisBank.showDetails();

 const hdfcBank={
    bankName:"Hdfc Bank",
    location:"Ranjangoan",
    accountNo:78956324,
    ifsc:"hdfc78945",
    interestRate:10,
    showDetails:function(){
        console.log(`Bank Name:${this.bankName},Location:${this.location},Account No:${this.accountNo},IFSC CODE:${this.ifsc},Interest Rate:${this.interestRate}`);
    }
}
console.log(`--------------------------------HDFC BANK DETAILS ----------------------------------`);
hdfcBank.showDetails();

 const yesBank= {
    bankName:"Yes Bank",
    location:"Solapur",
    accountNo:7896542,
    ifsc:"yes45632",
    interestRate:12,
    showDetails:function(){
        console.log(`Bank Name:${this.bankName},Location:${this.location},Account No:${this.accountNo},IFSC Code:${this.ifsc},Interest Rate:${this.interestRate}`);
    }
}
console.log(`------------------------------------YES BANK DETAILS-----------------------------------`);
yesBank.showDetails();


