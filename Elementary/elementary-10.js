// Write a program that prints the next 20 leap years.

/*
The algorithm to determine if a year is a leap year is as follows:
- Every year that is exactly divisible by four is a leap year, 
- except for years that are exactly divisible by 100, 
- but these centurial years are leap years, if they are exactly divisible by 400.
*/

function next20LeapYears() {
    let leapCount = 0;
    let currentYear = new Date().getFullYear();
    while (leapCount < 20) {
        if (isLeap(currentYear)) {
            console.log(`Leap year #${leapCount < 9 ? '0' + (leapCount+1) : (leapCount+1)} ${currentYear}`);
            leapCount++;
        }
        currentYear++;
    }
}

function isLeap(year) {
    const divisbleBy = (num, divisor) => num % divisor === 0;

    return (divisbleBy(year, 4) && !divisbleBy(year, 100)) || divisbleBy(year, 400);
}

next20LeapYears();