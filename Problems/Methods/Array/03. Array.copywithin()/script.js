// ------------ array.copywithin()---------

// the copywithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

// const arr = ["a", "b", "c", "d", "e"];

// console.log(arr.copyWithin(1,0,3)) // (target, start, end)
//["a","a","b","c","e"]

//  using for loop

function copywithin(arr, target, start, end) {


    for (let i = 0; i < arr.length; i++) {

        if (start < end) {
            arr[target] = arr[i];
            start++
            target++
        }

    }
    return arr

}

console.log(copywithin(["a", "b", "C", "d", "e"], 1, 0, 3));