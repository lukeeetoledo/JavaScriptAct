// Update the getDayTimeDifference() function so it will return the difference between 2 dates broken down in days, hours, minutes and seconds
/*
======================================================
Example output of current date is 2022-10-24 14:49:36
======================================================
Days Elapsed: 145
Hours Elapsed: 6
Minutes Elapsed: 49
Seconds Elapsed: 36
*/
// Modified by Luke Toledo

function getDayTimeDifference(currentDate, refDate){
    
    var total = Math.abs(currentDate - refDate) / 1000;

    let days = Math.floor(total / 86400);

    total -= days * 86400; //seconds 
    let hours = Math.floor(total / 3600) % 24;

    total -= hours * 3600;;//seconds
    let minutes = Math.floor(total / 60) % 60;

    total -= minutes * 60;//seconds
    let seconds =  Math.floor(total % 60);

    
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,      
    }
}

const dueDate = new Date("2022-12-5");
const timeDiff = getDayTimeDifference(new Date(), dueDate);
console.log(`Days Elapsed: ${timeDiff.days}`);
console.log(`Hours Elapsed: ${timeDiff.hours}`);
console.log(`Minutes Elapsed: ${timeDiff.minutes}`);
console.log(`Seconds Elapsed: ${timeDiff.seconds}`);

