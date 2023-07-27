//  write a function to create a new array that contains only the unique 

function uniqueElement() {

    let arr = [1, 2, 3, 4, 5, 6, 78, 9, 2, 3, 6, 5];

    let unique = [];

    for (let i = 0; i < arr.length; i++) {

        if (!unique.includes(arr[i])) {

            unique.push(arr[i])
        }
    }
    return unique;
}
console.log(uniqueElement());


// ----------------------using for of loop-------------------


function uniqueElement1(){

    // let arr  = [1,2,3,4,4,2,3,5,6,7,8,4,5,2];
    let arr = ["a","b","c","d","e","a","b"];

    let unique = [];

    for(element of arr){


        if(!unique.includes(element)){
            unique.push(element)

        }
    }
    return unique
}
console.log(uniqueElement1());


// -----------------------using reduce method()---------------------

function uniqueElement2(){

    let arr = ["a","b","c","d","e","a","b","k","g"];

let unique =arr.reduce((prev,curr)=>{

    if(!prev.includes(curr)){

       prev.push(curr)
    }
    return prev
},[])
return unique
}
console.log(uniqueElement2());


// -----------------------using forEach method()---------------


function uniqueelement3(){

    let arr = ["a","b","c","d","e","f","g","h","f","d","e","c","b"];

    let unique = []
    arr.forEach((elem)=>{

        if(!unique.includes(elem)){
            unique.push(elem)
        }
    })
    return unique
}
console.log(uniqueelement3());

