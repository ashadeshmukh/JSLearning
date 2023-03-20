// fibonic series number
function fibonic (num){
    let num1 = 0;
    let num2 = 1;
    let sum ;
    for (let index = 1; index < num; index++) {
        sum = num1 + num2;
        console.log(sum);
        num1 = num2;
        num2 = sum;
        
    }
    return num2;
}
fibonic(10);