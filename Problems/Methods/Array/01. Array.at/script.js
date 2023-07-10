// --------- Array .at()---------------

//  The at() methods takes an integer value and returns the item at  that index allowing for postive and negative integers. count back form the last item in the array.


const arr = [5, 12, 8, 128, 3];

const index = 3;

console.log(arr.at(index));


// ------ using for loop

function Arrayat() {

    for (let i = 0; i < arr.length; i++){

        if(i == index) {

            console.log(arr[index])

        }
    }
    
    }



Arrayat();
