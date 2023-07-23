// // Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

// // From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

// // In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

// // Divisible by 400.
// // Divisible by 4 and not divisible by 100.
// // Given a year, , find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .

// // For example, the given  = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is .

// // Function Description

// // Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.

// // dayOfProgrammer has the following parameter(s):

// // year: an integer
// // Input Format

// // A single integer denoting year .

// // Constraints

// // 1700 \le y \le 2700
// // Output Format

// // Print the full date of Day of the Programmer during year  in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .

// // Sample Input 0

// // 2017
// // Sample Output 0

// // 13.09.2017
// // Explanation 0

// // In the year  = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days. When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243. Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September). We then print the full date in the specified format, which is 13.09.2017.

// // Sample Input 1

// // 2016
// // Sample Output 1

// // 12.09.2016
// // Explanation 1

// // Year  = 2016 is a leap year, so February has 29 days but all the other months have the same number of days as in 2017. When we sum the total number of days in the first eight months, we get 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244. Day of the Programmer is the 256th day, so then calculate 256 - 244 = 12 to determine that it falls on day 12 of the 9th month (September). We then print the full date in the specified format, which is 12.09.2016.

// // Sample Input 2

// // 1800
// // Sample Output 2

// // 12.09.1800
// // Explanation 2

// // Since 1800 is leap year as per Julian calendar. Day lies on 12 September.



// function dayOfProgrammer(year) {

//     const monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     let count = monthdays[0]

//     let month = 0;


//     for (let i = 1; i < monthdays.length; i++) {


//         if (year % 4 != 0) {

//             count += monthdays[i]

//         }
//     }

//     return [month ,count]

// }
// console.log(dayOfProgrammer(2017))

function isLeapGregorian(year) {
    // Leap year in the Gregorian calendar if divisible by 400 or divisible by 4 and not divisible by 100
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  }
  
  function dayOfProgrammer(year) {
    let day = 256;
    let month = 0;
    
    if (year === 1918) {
      // Special case: 1918 is a transition year from Julian to Gregorian calendar
      // So, we skip 13 days (Feb 1 to Feb 13) in Russia
      day += 13;
    } else if (year > 1918) {
      // If it's a Gregorian calendar year
      // We subtract 13 days (Feb 1 to Feb 13) to adjust for the transition in 1918
      day -= 13;
    }
    
    // Find the month in which the Day of the Programmer falls
    const daysInMonths = [31, isLeapGregorian(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 0; i < daysInMonths.length; i++) {
      if (day > daysInMonths[i]) {
        day -= daysInMonths[i];
      } else {
        month = i + 1;
        break;
      }
    }
  
    // Format the date as "dd.mm.yyyy"
    const dayStr = day.toString().padStart(2, '0');
    const monthStr = month.toString().padStart(2, '0');
    const yearStr = year.toString();
  
    return `${dayStr}.${monthStr}.${yearStr}`;
  }
  
  // Test cases
  console.log(dayOfProgrammer(2017)); // Output: 13.09.2017
  console.log(dayOfProgrammer(2016)); // Output: 12.09.2016
  console.log(dayOfProgrammer(1800)); // Output: 12.09.1800
  

  