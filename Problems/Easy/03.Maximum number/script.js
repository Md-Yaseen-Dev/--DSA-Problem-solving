// // write a maximum numbers

// // --------------using for loop-------------
function max1() {

    let arr = [2, 3, 4, 5, 6, 9, 1];

    let maxval = arr[0]

    for (let i = 1; i < arr.length; i++) {


        if (arr[i] > maxval) {

            maxval = arr[i]
        }
    }
    return maxval;

}
console.log(max1());


// // ---------------using for of loop-----------------

function max2() {
    let arr = [2, 3, 4, 51, 6, 9, 1];

    let maxval = 0;

    for (elem of arr) {

        if (elem > maxval) {
            maxval = elem
        }
    }
    return maxval
}
console.log(max2());

// // ---------------using for in loop--------------------


function max3() {

    let arr = [2, 4, 5, 6, 9, 13];
    let maxval = 0;

    for (index in arr) {

        if (maxval < arr[index]) {

            maxval = arr[index]
        }
    }
    return maxval
}
console.log(max3());

// --------------using reduce method-----------------

function max4() {

    let arr = [5, 10, 15, 80, 25, 30];
    let maxval = arr.reduce((prev, curr) => {

        // prev define for only first elem ;
        //curr define  all elements except first elem
        if (prev < curr) {

            prev = curr
        }

        return prev //  || maxval = prev

    })
    return maxval
}
console.log(max4())


// --------------using forEach loop---------------

function max5() {

    let arr = [1, 10, 20, 30, 40];

    let maxval = 0;

    arr.forEach(elem => {

        if (elem > maxval) {

            maxval = elem
        }
    })
    return maxval
}
console.log(max5())

// ----------------using filter loop----------------


// -dont do this because it iterates on element. it is basically for filtering array of one providing function.Instead use for loop...forEach...reduce()..etc

function max6() {

    let arr = [2, 3, 4, 8];
    let maxval = 0;

    arr.filter(elem => {

        if (maxval < elem) {

            maxval = elem
        }
    }, 0)
    return maxval
}

console.log(max6());

// ----------------using Math.max-----------

function max7() {

    let arr = [5, 7, 9, 13, 17];
    let max = Math.max(...arr)
    return max;
}
console.log(max7())
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------min value also same  algorithm but difference is elem<maxval (element is lessthan maxvalue)---------------


function min1() {

    let arr = [2, 3, 4, 5, 6, 9, 1];

    let minval = arr[0]

    for (let i = 1; i < arr.length; i++) {


        if (arr[i] < minval) {

            minval = arr[i]
        }
    }
    return minval;

}
console.log(min1());


// // ---------------using for of loop-----------------

function min2() {
    let arr = [2, 3, 4, 51, 6, 9, 1];

    let minval = arr[0];

    for (elem of arr) {

        if (elem < minval) {
            minval = elem
        }
    }
    return minval
}
console.log(min2());

// // ---------------using for in loop--------------------


function min3() {

    let arr = [2, 4, 5, 6, 9, 13];
    let minval = arr[0];

    for (index in arr) {

        if (minval > arr[index]) {

            minval = arr[index]
        }
    }
    return minval
}
console.log(min3());

// --------------using reduce method-----------------

function min4() {

    let arr = [5, 10, 15, 80, 25, 30];
    let minval = arr.reduce((prev, curr) => {

        // prev define for only first elem ;
        //curr define  all elements except first elem
        if (prev > curr) {

            prev = curr
        }

        return prev //  || minval = prev

    })
    return minval
}
console.log(min4())


// --------------using forEach loop---------------

function min5() {

    let arr = [1, 10, 20, 30, 40];

    let minval = arr[0]

    arr.forEach(elem => {

        if (elem < minval) {

            minval = elem
        }
    })
    return minval
}
console.log(min5())

// ----------------using filter loop----------------


// -dont do this because it iterates on element. it is basically for filtering array of one providing function.Instead use for loop...forEach...reduce()..etc
function min6() {

    let arr = [2, 3, 4, 8];
    let minval = arr[0];

    arr.filter(elem => {

        if (minval > elem) {

            minval = elem
        }
    }, 0)
    return minval
}

console.log(min6());

// ----------------using Math.min-----------

function min7() {

    let arr = [5, 7, 9,2, 13, 17];
    let min = Math.min(...arr)
    return min;
}
console.log(min7())