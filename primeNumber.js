function prime(num){
    let count =0;
    for (let index = 1; index < num; index++) {
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
