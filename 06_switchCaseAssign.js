// create a normal funcion with month of year
function monthOfYear(monthNumber){
    switch (monthNumber) {
        case 1:
            console.log(`1st month is the ${monthNumber}:January`);
            break;
        case 2:
            console.log(`2nd month is the ${monthNumber}:February`);
            break;
        case 3:
            console.log(`3th month is the ${monthNumber}:March`);
            break;
        case 4:
            console.log(`4th monthe is the ${monthNumber}:April`);
            break;
        case 5:
            console.log(`5th month is the ${monthNumber}:May`);
            break;
        case 6:
            console.log(`6th month is the ${monthNumber}:June`);
            break;
        case 7:
            console.log(`7th month is the ${monthNumber}:July`); 
            break;
        case 8:
            console.log(`8th month is the ${monthNumber}:Augest`);
            break;
        case 9:
            console.log(`9th month is the ${monthNumber}:September`);
            break;
        case 10:
            console.log(`10th month is the ${monthNumber}:Octumber`);
            break;
        case 11:
            console.log(`11th month is the ${monthNumber}:November`);
            break;
        case 12:
            console.log(`12th month is the ${monthNumber}:December`);
            break;                                           
    
        default:
            console.log(`Invalid Month:${monthNumber}`);
            break;
    }
    
     
} 
monthOfYear(undefined)
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);