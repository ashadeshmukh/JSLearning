function Person(fullName,city) {
    this.fullName = fullName;
    this.city = city;
    this.show = function(){
        console.log(`${this.fullName} ${this.city}`);
    }
    
}
Person.prototype.country = "India";

const dhoni = new Person("Ms Dhoni","Ranchi");
dhoni.show();
console.log(dhoni.country);

const gill = new Person("SHUBAM Gill","Mumbai");
gill.show();
console.log(gill.country);

const ash = new Person("R Ashwin","Chani");
ash.show();
console.log(ash.country);

const array = [1,2,3,4,89];
array.push(90);
array.pop();

const date = new Date();
console.log(date);
console.log(typeof date);

const result = Math.pow(2,3);
console.log(result);

