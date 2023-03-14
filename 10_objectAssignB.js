
console.log(`================= bankSbi object using literals ===================== `);
const bankSbi = {
    bankName:"SBI Bank",
    accountNo:455223368,
    ifscCode:"SBI45236",
    branchCode:"SBI00524"

}
console.log(`Bank Name:${bankSbi.bankName},Account No.:${bankSbi.accountNo},IFSC Code:${bankSbi.ifscCode}, Branch Code:${bankSbi.branchCode}`);
console.log(`----------------------------------------------------------------------------------------------------`);

console.log(`================== bankLocation object using literals===================`);

const bankLocation ={
    street:"Jijamata Nagar",
    city: "Pune",
    pinCode: 456321
}
console.log(`Street:${bankLocation.street},city:${bankLocation.city},Pin Code:${bankLocation.pinCode}`);
console.log(`--------------------------------------------------------------------------------------------`);

console.log(`========= Clone the bankSbi and bankLocation object using object.assign()============`);
const sbiBank = bankSbi;
const locationBank = bankLocation;
console.log(`Bank Name:${sbiBank.bankName},Account No.:${sbiBank.accountNo},IFSC Code:${sbiBank.ifscCode}, Branch Code:${sbiBank.branchCode}`);
console.log(`Street:${locationBank.street},city:${locationBank.city},Pin Code:${locationBank.pinCode}`);

console.log(`============= Clone the bankSbi and bankLocation object using Spread Operator================`);
const newSbiBank = { ...bankSbi};
const newBankLocation = {...bankLocation};
console.log(`Bank Name: ${newSbiBank.bankName},Account No.:${newSbiBank.accountNo},IFSC Code: ${newSbiBank.ifscCode},Branch Code:${newSbiBank.branchCode}`);
console.log(`Street:${newBankLocation.street}, City: ${newBankLocation.city},Pin Code:${newBankLocation.pinCode}`);

console.log(`========== rateOfinterest object using literals==============`);

const rateOfinterest ={
    homeLoanInterest: 10,
    personalLoanInterest: 20,
    dueInterest : 15
}

console.log(`Home Loan Interest:${rateOfinterest.homeLoanInterest} , Personal Loan Interest:${rateOfinterest.personalLoanInterest}, Due Interest:${rateOfinterest.dueInterest}`);

console.log(`=============== Merge the "bankSbi", "bankLocation", "rateOfinterest" new object namely "sbiDetails" =============== `);

const sbiDetails = {
    bankSbi:{
        bankName:"SBI Bank",
        accountNo:455223368,
        ifscCode:"SBI45236",
        branchCode:"SBI00524"
    },
    bankLocation:{
        street:"Jijamata Nagar",
        city: "Pune",
        pinCode: 456321
    },
    rateOfinterest:{
        homeLoanInterest: 10,
        personalLoanInterest: 20,
        dueInterest : 15
 }

}
console.log(`Bank Name:${sbiDetails.bankSbi.bankName},Account No:${sbiDetails.bankSbi.accountNo},IFSC Code:${sbiDetails.bankSbi.ifscCode},BranchCode:${sbiDetails.bankSbi.branchCode},Street:${sbiDetails.bankLocation.street},City:${sbiDetails.bankLocation.city},Pin Code:${sbiDetails.bankLocation.pinCode},Home Loan Interest:${sbiDetails.rateOfinterest.homeLoanInterest},
Personal Loan Interest:${sbiDetails.rateOfinterest.personalLoanInterest},Due Interest:${sbiDetails.rateOfinterest.dueInterest}`);

console.log(`======================= Traverse this merged object============================`);
const mergedsbiBank =[bankSbi,bankLocation,rateOfinterest];

/*for (const element in mergedsbiBank) {
    console.log(`Bank Name: ${element.bankName},
                 Account Name: ${element.accountNo},
                 IFSC Code: ${element.ifscCode},
                 Branch Code:${element.branchCode},
                 Street:${element.street},
                 City:${element.city},
                 PIN Code:${element.pinCode},
                 Home Loan Interest:${element.homeLoanInterest},
                 Personal Loan Interest:${element.personalLoanInterest},
                 Due Interest:${element.dueInterest}`);
    
}*/

for (let index = 0; index < mergedsbiBank.length; index++) {//1
    const element = mergedsbiBank[index];   
    console.log(element);
}




