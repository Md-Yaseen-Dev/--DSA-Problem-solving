// // ---------------split()------------------------

// // THe split() methods takes a pattern and divides a string into an ordered list of substrings by searching for the pattern, puts these substrings into an array and returns the array


const str = "This is a string";

const words = str.split(" ");  

const words1 =  str.split(""); 

console.log(words); // with space

console.log(words1);// without space


// // using for loop for without space string

const str1 = "This is first string";

const arr = [];

for (i = 0; i < str1.length; i++) {

    arr.push(str1[i])

}

console.log(arr)


// string in split using  for loop with space ;

let newArr = [];
const str2 = "This is second string";
let str3 = ""
for (i = 0; i < str1.length; i++) {

        if (str1[i] != " ") {

            str3 += str1[i];
        }
        else {
            newArr.push(str3);
             str3 =""
        }
}
console.log(newArr);
