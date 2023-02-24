function interview(gradScore,hscScore,sscScore,candidateName){
 var result = (gradScore>=70 || hscScore>=80|| sscScore>90) ? `Congrates ${candidateName} you are eligible for TCS interview`:
 `Unfortunately you are not eligible for interview`;
 console.log(result);

}
 interview(80, 86, 90, "Dinesh Deshmukh");
//console.log(result);

interview(70, 65, 55, "Pare Deshmukh");
//console.log(result2);

interview(60, 79, 88, "Shital Ambhore");
