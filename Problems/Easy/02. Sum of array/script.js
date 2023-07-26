// write a function to calculate the sum of all elements in an array 

// --------------using for loop---------
function sum() {

    let arr = [1, 2, 3, 4, 5];

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i]
    }
    return sum
}

console.log(sum());

// ------------- using for of loop--------------

function sum1() {

    let arr = [2, 3, 4, 5, 6, 7];
    let sum = 0;

    for (elem of arr) {

        sum += elem
    }
    return sum;
}
console.log(sum1())



// -----------------using reduce method-------------

function sum2() {

    let arr = [2, 3, 4, 5, 6, 1];
    let sum = arr.reduce((prev, curr) => {

        return prev + curr
    })

    return sum
}

console.log(sum2())

// ------------------using forEach method-------------

function sum3() {

    let arr = [2, 4, 5, 6, 7, 4, 10];

    let sum = 0

    arr.forEach((elem) => {
        sum += elem
    })

    return sum;
}

console.log(sum3())

// -------------------using map method----------------


function sum4() {

    let arr = [1, 3, 5, 7, 9];

    let sum = 0;

    arr.map(elem => {
        sum += elem
    })
    return sum;
}
console.log(sum4())

// --------------using filter method--------------------

function sum5() {

    let arr = [10,20,30,40,50];

    let sum = 0;

    arr.filter(elem =>{ sum+=elem
    })
    return sum;
}
console.log(sum5());

// ----------------using for in loop---------------------

function sum6(){

    let arr =[ 10,20,30];

    let sum = 0 ;

    for(index in arr){

        sum += arr[index]
    }
    return sum
}
console.log(sum6())