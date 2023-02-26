console.log(`*********Check Greater Numbers:******************`)

var num1 = 10
var num2 = -10

var a = 800
var b = 899

function greaternumber(num1, num2) {
  var greater = num1 > num2 ? num1 : num2
  return greater
}
var greaterResult = greaternumber(num1, num2)
console.log(`Greater Number ${greaterResult}`)

console.log(`.............................................................`)

var greaterResult2 = greaternumber(a, b)
console.log(`Greater Number ${greaterResult2}`)

//Check even and odd number
console.log(
  `*************check EVEN AND ODD return true or false****************`,
)
var num = 29
var a = 44
var b = 0
var c = 101

function isEvenOrOddNum(num) {
  //var num = a;
  var result = num % 2 == 0 ? true : false
  return result
}
var displayResult = isEvenOrOddNum(num)
console.log(`IS 29 EVEN OR ODD NUMBER: ${displayResult}`)

var displayResult1 = isEvenOrOddNum(a)
console.log(`IS 44 EVEN OR ODD NUMBER: ${displayResult1}`)

var displayResult2 = isEvenOrOddNum(b)
console.log(`IS 0 EVEN OR ODD NUMBER: ${displayResult2}`)

var displayResult3 = isEvenOrOddNum(c)
console.log(`IS 101 EVEN NUMBER: ${displayResult3}`)

console.log(
  `*********************Check which word has even or odd length ************** `,
)

function wordLength(word) {
  var wordLength = word.length
  var result = wordLength % 2 == 0 ? 'Even' : 'ODD'
  return result
}
var result = wordLength('JavaScript')
console.log(`Word "JavaScript" has ${result} lenght`)

var result1 = wordLength('Google')
console.log(`Word "Google" has ${result1} length`)

var result2 = wordLength('developer')
console.log(`Word "developer" has ${result2} length`)
