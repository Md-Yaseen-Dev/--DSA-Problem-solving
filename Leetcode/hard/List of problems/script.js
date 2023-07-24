// // // You are given a 0-indexed integer array nums representing the strength of some heroes. The power of a group of heroes is defined as follows:

// // // Let i0, i1, ... ,ik be the indices of the heroes in a group. Then, the power of this group is max(nums[i0], nums[i1], ... ,nums[ik])2 * min(nums[i0], nums[i1], ... ,nums[ik]).
// // // Return the sum of the power of all non-empty groups of heroes possible. Since the sum could be very large, return it modulo 109 + 7.

// // // Input: nums = [2,1,4]
// // // Output: 141
// // // Explanation: 
// // // 1st group: [2] has power = 2^2 * 2 = 8.
// // // 2nd group: [1] has power = 1^2 * 1 = 1. 
// // // 3rd group: [4] has power = 4^2 * 4 = 64. 
// // // 4th group: [2,1] has power = 2^2 * 1 = 4. 
// // // 5th group: [2,4] has power = 4^2 * 2 = 32. 
// // // 6th group: [1,4] has power = 4^2 * 1 = 16. 
// // // ​​​​​​​7th group: [2,1,4] has power = 4^2​​​​​​​ * 1 = 16. -
// // // The sum of powers of all groups is 8 + 1 + 64 + 4 + 32 + 16 + 16 = 141.

// function powerHeros(arr) {

//     let sum = 0;

//     if (arr.length > 2) {
//         let max = Math.max(...arr);
//         let min = Math.min(...arr);
//         sum += (max * max) * min

//     }

//     for (let i = 0; i < arr.length; i++) {


//         for (let j = 0; j <= i; j++) {


//             if (arr[i] < arr[j]) {

//                 sum += (arr[j] * arr[j]) * arr[i]

//             }
//             else {

//                 sum += (arr[i] * arr[i]) * arr[j]

//             }

//         }
//     }


//     return sum

// }
// console.log(powerHeros([2, 1, 4]));
// console.log(powerHeros([1, 1, 1]));
// // console.log(powerHeros([4, 4]));


function powerheros(nums) {

    let newarr = []

    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j < i + 1; j++) {

            if (i == j) {
                newarr.push([nums[i]])


            }
            else {
                newarr.push([nums[i], nums[j]])

            }
        }

    }
    newarr.push(nums);

    let sum = 0
    for (k = 0; k < newarr.length; k++) {

        sum += Math.pow(Math.max(...newarr[k]), 2) * Math.min(...newarr[k]);

    }
    return sum;

}
console.log(powerheros([2, 1, 4]));



