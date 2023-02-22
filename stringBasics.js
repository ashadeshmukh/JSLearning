console.log(".........................ASSIGNMENT 1........................");
function stringBasics(){
    var mydreamcompany = "Your dream company name:TCS ";
    return mydreamcompany;  
}
var cName = stringBasics();
console.log(cName);
console.log("............................................................................................");

    //var hobbies = "My hobbies are";
    //return myHobbies;
function hobbies(){
    console.log("My hobbies are: Doing Yoga, Cocking Recipes, Making Friends");
}
hobbies();
console.log("...............................................................................................");

var myHobbyList = "DoingYoga, CockingRecipes, MakingFriends";
var hobbyResult = myHobbyList.split("");
//console.log(hobbyResult);
console.log("Sum of the total no of character:",hobbyResult.length);

console.log("................................Assigment 2.................................");
console.log("....Task 1.....");

function stringHandOn(){
    console.log("     Hey you are doing good, keep it up"     );
}
stringHandOn();

var string = "      Hey you are doing good, keep it up     ";
console.log("........Task2..........");
var stringLength = string.length;//length of char
console.log("Calculate lenght of String:",stringLength);

console.log("..........Task 3.........");
var stringAferTrim = string.trim();

var stringAfterTrim = string.trim();
console.log("Remove the leading and trailing extra space: ",string.length, stringAfterTrim.length);

console.log("..........task 4..............");
 var count = string.length - stringAferTrim.length;
 console.log("Total No. extra space:",count);

 //console.log(string.trimStart(), string.trimEnd());
 console.log("...........Task 5..........");

 
var charAtFirstIndex = stringAfterTrim.charAt(0);
console.log("First char is:",charAtFirstIndex);

var charAtLastIndex = stringAfterTrim.charAt(stringAfterTrim.length-1);
console.log("Last char is:",charAtLastIndex);

//console.log(string.trimStart(0), stringAferTrim.trimEnd(-1));

console.log("task6...................................................................");
var splitResult = stringAferTrim.split(" ");
console.log("count of total words avaliable in string:",splitResult);

console.log("Task 7.....................................................................");

var indexOfM = stringAferTrim.indexOf("good");
console.log("Index of char good is:",indexOfM);

console.log("Task 8.........................................................");
var sliceResult = stringAferTrim.slice(22);
//console.log(sliceResult);
console.log("substring starting from index22:",stringAferTrim.slice(22));

console.log("Task 9..........................................................");


console.log(" String end with words up: ", stringAferTrim.includes("up"));
console.log("Task 10.............................");

console.log(" string starts with words Hey:", stringAferTrim.includes("Hey"));






