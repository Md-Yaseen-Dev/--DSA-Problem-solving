// Given an array arr[] of n integers. Check whether it contains a triplet that sums up to zero. 

// Note: Return 1, if there is at least one triplet following the condition else return 0.

// Example 1:

// Input: n = 5, arr[] = {0, -1, 2, -3, 1}
// Output: 1
// Explanation: 0, -1 and 1 forms a triplet
// with sum equal to 0.
// Example 2:

// Input: n = 3, arr[] = {1, 2, 3}
// Output: 0
// Explanation: No triplet with zero sum exists. 

// Your Task:
// You don't need to read input or print anything. Your task is to complete the boolean function findTriplets() which takes the array arr[] and the size of the array (n) as inputs and print 1 if the function returns true else print 0 if the function returns false. 

// Expected Time Complexity: O(n2)
// Expected Auxiliary Space: O(1)

// Constrains:
// 1 <= n <= 104
// -106 <= Ai <= 106

// --sometimes it will not works
function sumzero(arr) {
    let newArr = [];
    let n = arr.length
    let sum = 0;
    for (i = 0; i < n; i++) {

        for (j = 1; j < n; j++) {

            for (k = 2; k < n; k++) {

                newArr.push(arr[i] + arr[j] + arr[k]);
                // break;

            }
            break;
        }
        
    }
    return newArr
}
// console.log(sumzero([0, -1, 2, -3, 1]));
// console.log(sumzero([1, 2, 3]));
console.log(sumzero([4, -16, 43, 4, 7, -36, 18]));
console.log(sumzero([97, -27, 2, -34, 61, -39
]));



// ---real probelem works
function sumzero(arr) {
    arr.sort((a, b) => a - b)
    let n = arr.length;

    for (i = 0; i < n - 2; i++) {

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum == 0) {
                return true;
            }
            else if (sum < 0){
                left++
            }
            else{
                right--
            }
        }
    }


}
console.log(sumzero([0, -1, 2, -3, 1]));
console.log(sumzero([1, 2, 3]));
console.log(sumzero([4, -16, 43, 4, 7, -36, 18]));
console.log(sumzero([97, -27, 2, -34, 61, -39
]));