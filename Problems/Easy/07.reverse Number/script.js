// write a reverse array 

function reverseArr() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];

    let reverse = [];

    for (let i = 1; i < arr.length; i++) {

        reverse.push(arr[arr.length - i])
    }
    return reverse
}
console.log(reverseArr());