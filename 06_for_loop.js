

// print numbers from 1 to 10
//initialization
//update expression +1
//condition <=10

for (let index = 1; index <=10; index = index + 1){
    console.log(index);
  
}

console.log(`reverse number`);
//print 0 to 5
for (let index=0; index >= 0; index = index-1){
    console.log(index);

}
console.log("Table of 5");
for(let index = 5; index<=50;index = index+5){
    console.log(index);
}

for (let index = 1; index<10;){//infinite loop
    console.log(index);
}

for (let index =10; index >=0; index++){//infinite loop
    console.log(index);

}
//index++ --> index = index+1;


firstWordLength = function (strGiven){
    var firstword = "";
    for(let index=0;index<firstWordLength.length;index++){
        var char = strGiven.charAt(index);
        firstword= firstword+char;
        if(char==" "){
           break; 
        }
    }
    return firstword;

}
var firstword = firstWordLength('Focus is the key');
console.log(`First word --> ${firstword} length is ${lenght}`);