//  write a function to concatenate all elements of an array into a single 


//  ----------------using for loop -----------------
function concatenate() {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let str = ""

    for (let i = 0; i < arr.length; i++) {

        str += arr[i]
    }
    return str
}
console.log(concatenate())


// ----------------using reduce loop------------------

function concatenate1() {

    let arr = ["A", "B", "C", "D", "E"];

    let concatenate = arr.reduce((prev, curr) => {
        return prev += curr;
    })
    return concatenate
}

console.log(concatenate1());


// ----------------using forEach()--------------


function concatenate2() {

    let arr = [1, 2, 3, 83, "a", "b"];

    let str = "";
    for (let i = 0; i < arr.length; i++) {

        str += arr[i]
    }
    return str;
}
console.log(concatenate2());


// ----------------using for of loop-------------

function concatenate3() {
    let arr = ["D", "R", "E", "A", "M"];

    let str = ""
    for (elem of arr){

        str+= elem
    }
    return str

}
console.log(concatenate3());

// same as it is for -> for in loop but difference is str+= arr[elem]

// ----------------using join method----------

let arr = ["H","U","R","T","S"];

console.log(arr.join(""));



