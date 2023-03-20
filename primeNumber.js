function prime(num){
    let count =0;
    for (let index = 1; index <= num; index++) {
        if (num%index==0) {
            count++;
        } 
    }
        if(count==num){
            console.log(`This is prime number:${num}`);
        }
        else{
            console.log(`This is not prime number:${num}`);
        }   
    
}
prime(1);
prime(3);
prime(7);
prime(2);
prime(4);
console.log(`*************************PRINT 1 TO 50 PRIME NUMBER*******************************`);
console.log(`*********************prime Number 1 to 10 number******************`);
function primeNumbers(startValue,totalPrime){
    let count = 0;
    let num = startValue;
    const arrayOfPrime = [];
    while (count<totalPrime) {
        let isPrimeNum = isPrime(num);
        if(isPrimeNum) {
            count++;
            arrayOfPrime.push(num);
        }
        num++;
    } 
    console.log(arrayOfPrime); 
}

function isPrime(num){
    for (let index = 2; index < num; index++) { // num = 7 index= 7
        if(num%index ==0) {// 7%6==0
            return false;
        }
    }
    return true;
}
primeNumbers(3, 10);
primeNumbers(20, 10);
primeNumbers(50, 15);
