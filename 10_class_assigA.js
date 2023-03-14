console.log(`----------------------------Create class Vehicle-------------------------------`);
class Vehicle {
    constructor(carName, carModel, carMileage, carEngine, carColor, carPrize){
        this.carName = carName;
        this.carModel = carModel;
        this.carMileage = carMileage;
        this.carEngine = carEngine;
        this.carColor = carColor;
        this.carPrize = carPrize;

    }
}

const hondaVehicle = new Vehicle("Honda","Civic","20","diesel","black",1500000);
console.log(hondaVehicle);

const mercedezVehicle = new Vehicle("Mercedez","BClass","10","diesel","White",105000.00);
console.log(mercedezVehicle);

const scorpioVehicle = new Vehicle("Scorpio","Veyron","15","Petrol","Silver",125000);
console.log(scorpioVehicle);

const bugattiVehicle = new Vehicle("Bugatti","Veyron","10","diesel","Purple",300000.00);
console.log(bugattiVehicle);

const brezaVehicle = new Vehicle("Breze","Bclass","10","diesel","black",100000.00);
console.log(brezaVehicle);

const arrayOfVehicles = [hondaVehicle, mercedezVehicle, scorpioVehicle, bugattiVehicle, brezaVehicle];
console.log(`----------------------Add into array and Traverse it for of loop-----------------------------------`);

for (const element of arrayOfVehicles) {
    console.log(`Vehicle Details:${element.carName}, ${element.carModel}, ${element.carMileage}, ${element.carEngine}, ${element.carColor}, ${element.carPrize}`);
    
}


console.log(`--------------------------Create class "College"-------------------------`);
class College {
    constructor(collegeName, collegeUniversity,collegeLocation,collegeDepartment){
        this.collegeName = collegeName;
        this.collegeUniversity = collegeUniversity;
        this.collegeLocation = collegeLocation;
        this.collegeDepartment = collegeDepartment;
    }
    
}

const cocsitCollege = new College("COCSIT College","SRTMU Nanded University","A.B.Road,Latur","Computer Science");
console.log(cocsitCollege);

const netizenCollege = new College("Netizen College","SRTMU Nanded University","Latur","Computer Science");
console.log(netizenCollege);

const mitCollege = new College("MIT College","SRTMU Nanded University","Latue","Science");
console.log(mitCollege);

const rajivgandhiCollege = new College("Rajiv Gandhi College","SRTMU Nanded University","Nanded","Computer Science");
console.log(rajivgandhiCollege);

console.log(`-------------------------------Traverse using for in -----------------------------------------------------`);

for (const key in cocsitCollege) {
    if (cocsitCollege.hasOwnProperty.call(cocsitCollege, key)) {
        const element = cocsitCollege[key];
        console.log(`${key} : ${element}`);
        
    }
}


console.log(`---------------------------------------------------------------------------------------`);

for (const key in netizenCollege) {
    if (netizenCollege.hasOwnProperty.call(netizenCollege, key)) {
        const element = netizenCollege[key];
        console.log(`${key} : ${element}`);
        
    }
}

console.log(`-----------------------------------------------------------------------------------------`);

for (const key in mitCollege) {
    if (mitCollege.hasOwnProperty.call(mitCollege, key)) {
        const element = mitCollege[key];
        console.log(`${key} : ${element}`);
        
    }
}
console.log(`------------------------------------------------------------------------------------------`);

for (const key in rajivgandhiCollege) {
    if (rajivgandhiCollege.hasOwnProperty.call(rajivgandhiCollege, key)) {
        const element = rajivgandhiCollege[key];
        console.log(`${key} : ${element}`); 
    }
}











