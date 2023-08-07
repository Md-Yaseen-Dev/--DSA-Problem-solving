// Working 9 to 5
// Write a function that calculates overtime and pay associated with overtime.

// Working 9 to 5: regular hours
// After 5pm is overtime
// Your function gets an array with 4 values:

// Start of working day, in decimal format, (24-hour day notation)
// End of working day. (Same format)
// Hourly rate
// Overtime multiplier
// Your function should spit out:

// $ + earned that day (rounded to the nearest hundreth)
// Examples
// overTime([9, 17, 30, 1.5]) ➞ "$240.00"

// overTime([16, 18, 30, 1.8]) ➞ "$84.00"

// overTime([13.25, 15, 30, 1.5]) ➞ "$52.50"
// 2nd example explained:

// From 16 to 17 is regular, so 1 * 30 = 30
// From 17 to 18 is overtime, so 1 * 30 * 1.8 = 54
// 30 + 54 = $84.00

function overTime([start, end, hourlyRate, overtimeMultiplier]) {
    const regularHours = Math.min(end, 17) - start // Regular hours end at 5pm (17:00)
    const overtimeHours = Math.max(end - 17, 0);

    // Overtime hours start after 5pm

    const regularPay = regularHours * hourlyRate;
    const overtimePay = overtimeHours * hourlyRate * overtimeMultiplier;

    const totalPay = regularPay + overtimePay;

    return `$${totalPay}`;
}

console.log(overTime([9, 18, 30, 1.5]));
console.log(overTime([16, 18, 30, 1.8])); 
console.log(overTime([13.25, 15, 30, 1.5]));