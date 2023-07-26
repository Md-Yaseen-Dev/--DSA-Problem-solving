// //  count the target number

// // -------------using for loop --------------

// function count1(target) {

//     let arr = [2, 3, 4, 2, 4, 2, 45, 3, 2, 4, 5, 6, 5, 7, 5];

//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] == target) {
//             count++

//         }
//     }
//     return count
// }
// console.log(count1(2));
// console.log(count1(5));


// ---------------using reduce method------------

function count2(target) {

    let arr = [1, 2, 3, 1, 1, 4, 1, 4, 3, 2];



    let count = 0 ;
    
    arr.reduce((prev, curr) => {

        if (curr == target || prev == target) {

            count++
        }
        
    })
    return count
}
console.log(count2(1))


function countOrrcur(target){
    let arr = [2,1, 2, 3, 4, 5, 6, 2,];
    let find = arr.reduce((previousValue,currentValue)=>{
        if(currentValue == target){
            previousValue++
        }
        return previousValue  // what ??  how it worksit will go to currentvalue with target ??? need to know
    },0)
    return find
}
console.log(countOrrcur(2));

//------------ forEach loop -----
function count3(tar){

    let arr = [1,2,3,1,2,1,1,1,1,1,1,1,1]

    let count = 0
    
    arr.forEach(elem => {

        if(elem == tar){
            count++
        }
    })
    return count
}
console.log(count3(1))