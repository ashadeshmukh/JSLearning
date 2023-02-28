var checkLeapYear = function (leapYear){
   var leap = new Date(leapYear, 1, 29).getDate() === 29;
    if (leap) {
        console.log(`The year ${leapYear} is leap year`);
    }
    else if((typeof leapYear!="number")||(isNaN(leapYear))) {
        console.log(`${leapYear} invalid value, Enter correct value`);

     }
    else{
        console.log(`The year ${leapYear} not leap Year`);
    }    
    }

checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);