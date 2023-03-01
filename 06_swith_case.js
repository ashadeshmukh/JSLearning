var dayNumber = 2;
//1 Monday
//2 Tuesday
//7 Sunday
// 0||>7||<0||null
function weekDay(day){
    switch (day) {
        case 1:
            console.log(`Day of the week is ${day}:Monday`);
            console.log(`Monday is the start day of the week`);
            break;
        case 2:
            console.log(`Day of the week is ${day}:Tuesday`);
            break;
        case 3:
            console.log(`Day of the week is ${day}:Wensday`);
            break;
        case 4:
            console.log(`Day of the week is ${day}:Thursday`);
            break;
        case 5:
                console.log(`Day of the week is ${day}:Friday`);
            break;
        case 6:
            console.log(`Day of the week is ${day}:Saturday`);
            break;
        case 7:
           console.log(`Day of the week is ${day}:Sunday`);
           break;           

        default:
            console.log(`Invalid day`);
            break;
    }
    console.log(`End of switch case for ${day}`);
}
weekDay(7);//1 to 7
weekDay(3);
weekDay(0);
weekDay(null);
weekDay(undefined);
weekDay(-2);