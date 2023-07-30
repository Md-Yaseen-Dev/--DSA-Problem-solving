// ou are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


function twononempty(arr1, arr2) {

    let newarr = [];

    let num1 = Number(arr1.reverse().join(""));
    let num2 = Number(arr2.reverse().join(""));

    let total = num1 + num2;

    let str = String(total);

    for (let i = 0; i < str.length; i++) {

        newarr.push(Number(str[str.length - 1-i]))
    }
    return newarr
}

console.log(twononempty([2, 4, 3], [5, 6, 4]))
console.log(twononempty([9,9,9,9,9,9,9], [9,9,9,9]))




// addTwoNumbers = function(l1, l2) {
//     const iter = (n1, n2, rest = 0) => {
//         if (!n1 && !n2 && !rest) return null;
//         const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
//         const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
//         return new ListNode(newVal % 10, nextNode);
//     }
//     return iter(l1, l2);

// }

// addTwoNumbers([2,3,4],[2,5,7]);
