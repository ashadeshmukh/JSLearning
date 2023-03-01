function display(args) {
    console.log(args+args);
    
}
display(30);

var num = 100;
console.log(num);//100
var show = function(args){
    console.log(`Hi Good Morning`);
}
show();
console.log(typeof show);

//FE- function expression
var sum= function(args1, args2){
    console.log(args1+args2);
    return args1+args2;
}
var result = sum(100,100);
console.log(result);



