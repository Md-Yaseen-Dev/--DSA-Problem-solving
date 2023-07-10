// ----------------------concat()-----------------------

//  The concat() method is used to merge two or more arrays. this method not change the existing arrays, ut instead returns a new array

const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = ["s", "e", "k"];
const arr4 = ["y", "m", "n"];


console.log(arr1.concat(arr2).concat(arr3).concat(arr4));


// ----using for loop and rest operator "


function concat(...arr) {

    let newarr = [];

    for (i = 0; i < arr.length; i++) {

        for (j = 0; j<arr[i].length; j++) {
            newarr.push(arr[i][j])
        }
    }
    return newarr

}


console.log(concat(arr1, arr2, arr3, arr4))

