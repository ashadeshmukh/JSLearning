console.log(`*****************step1****************`);
console.log(`Find out voules in string `);
console.log(`---------------------------------------------------------------`);
function getVowels(str) {
    var vowelsCount = 0;
  
    //turn the input into a string
    var string = str.toString();
  
    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {
  
    //if a vowel, add to vowel count
      if (string.charAt(i) == "a"||string.charAt(i) == "A"|| string.charAt(i) == "e"|| string.charAt(i) == "E" || string.charAt(i) == "i"
      ||string.charAt(i)=="I" || string.charAt(i) == "o"||string.charAt(i)=="O" || string.charAt(i) == "u"||string.charAt(i)=="U") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }
  var result = getVowels('JavaScript is the language Of Internet');
  console.log(`'JavaScript is the language Of Internet'no. of voules:${result}`);

  var result = getVowels('I am Angular Developer');
  console.log(`'I am Angular Developer'no. of voules:${result}`);

  var result = getVowels('Hard work and commitment is the key of success');
  console.log(`'Hard work and commitment is the key of success'no. of voules:${result}`);

  console.log(`**************************task 2**********************`);

  console.log(`Finding the length of last word of the string`);
  console.log(`---------------------------------------------------------------`);
 function lastWordCharsCount (str){ 
  //var counter = 0;

    for (let index = str.length-1 ; index >= 0; index--) {
       //var char = str.charAt(index);// o
       var strcount = str.trim().split(' ');
       if(strcount.length === 0){
          return  0;
       }else{
        return strcount[strcount.length - 1].length;
       }
      }
}
var result = lastWordCharsCount("Do it anyhow"); 
console.log(`Total char available in last word'DO it anyhow' : ${result}`);

var result = lastWordCharsCount("I am Angular Developer");
console.log(`Total char available in last word 'I am Angular Developer' : ${result}`); 






  
   