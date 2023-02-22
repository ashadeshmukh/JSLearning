var greet = "Good Morning";
console.log(typeof greet);

console.log("Total no of char avaliable into this string variable-greet:");
var greetLength = greet.length;
console.log("Total length of str is:" ,greetLength);

console.log("Find the char by index value:");
var charAtIndex3 = greet.charAt(3);
console.log(charAtIndex3);

console.log("Find the last char:");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Last char is:",charAtLastIndex);

console.log("Find the index by char value");
var indexOfM = greet.indexOf("M");
console.log("Index of char M is:",indexOfM);

console.log("Index of char which is not avaliable into the string:",greet.indexOf('z'));

console.log("Index of a char:",greet.indexOf('o'));


console.log("Index of a char:",greet.lastIndexOf('o'));

var replaceResult = greet.replace("Morning","Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case",replaceResult.toUpperCase());
console.log("Lower case:",replaceResult.toLowerCase());

var myName = "  Asha Deshmukh  ";
var myNameAferTrim = myName.trim();
//console.log("Removing extra start and end spaces using trim():", myNameAfterTrim,myName.length,myNameAferTrim.length);
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length);

//Find the total extra spaces removed from the string -myName
 var count = myName.length - myNameAferTrim.length;
 console.log(count);

 console.log(myName.trimStart(), myName.trimEnd());

 console.log("includes()");
 console.log("is substring Mor includes in the greet or not:",greet.includes("Mor"));

 console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));

console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

console.log("slice() method");
var sliceResult = greet.slice(5,12);
console.log(sliceResult);
console.log(greet.slice(2,5).length);

//var greet = "Good Morning";
//var splitResult = greet.split("");
console.log("split() method");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words:",splitResult.length);

var myFriendList = "Bill gates, Stew Job, Elon Mask, Rata Tata, Sunder pichai, Satya Nadella, Narayan Murti, Nanden Nilekani, Larry Page, Surgey Brain,Tim Cook";
var splitResult = myFriendList.split(",");
console.log(splitResult);
console.log("total friends:",splitResult.length);

var splitResult = myFriendList.split(" ");
//console.log(splitResult);
console.log("total words:",splitResult);



