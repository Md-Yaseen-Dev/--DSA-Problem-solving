// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

function timeConversion(s) {

    let newstr = s.split(":");

    let hh = Number(newstr[0]);

    let min = newstr[1];

    let ss = newstr[2].slice(0, 2);


    if (newstr[newstr.length - 1].slice(2) == "PM" &&  hh != 12) {

        hh += 12

    }
    else {

       hh = (hh < 10) ? `0${hh}` : `${hh}`;
    }


    if (hh == 12) {

        hh = "00";
    }
    return `${hh}:${min}:${ss}`
}

console.log(timeConversion("12:05:45AM"))
console.log(timeConversion("12:05:39AM"))
console.log(timeConversion("11:05:45PM"))
console.log(timeConversion("12:45:54PM"));
console.log(timeConversion("12:00:00AM"));




// other method

// function timeConversion1(s) {
//     const timeArr = s.slice(0, 8).split(':');
//     const hour = parseInt(timeArr[0]);

//     const isPM = s.slice(-2) === 'PM';
  
//     if (hour === 12) {
//       timeArr[0] = isPM ? '12' : '00';
//     } else {
//       timeArr[0] = isPM ? (hour + 12).toString().padStart(2, '0') : timeArr[0].padStart(2, '0');
//     }
  
//     return timeArr.join(':');
//   }
  
//   // Test the function with the sample input
//   const input = '07:05:45PM';
//   const result = timeConversion1(input);
//   console.log(result); // Output: '19:05:45'
  

