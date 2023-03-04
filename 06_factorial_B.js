console.log(`==============================Factoral of a number=============================`);
function factorialoWordsCount(str){
    if(str==null||str==undefined||isNaN(str) && (typeof str=="number")){
      console.log(`Given string: ${str} is invalid`);
    } else{
      console.log(`Given string: ${str} is valid`);
      let words = str.split(" ");
      const totalWords = words.length;
      console.log(`Total No. of words: ${totalWords}`);
      let factorial = 1;
      for(let index = totalWords; index>0; index--){
        factorial = factorial*index;
      } 
      console.log(`Factorial of "${str}" is ${factorial}`);
      console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);
     
  }
  }
  factorialoWordsCount("Revision is the nother of success");
  factorialoWordsCount(null);
  factorialoWordsCount("");
  factorialoWordsCount("Asha dinesh deshmukh");
  factorialoWordsCount("We never fail, we always learn");