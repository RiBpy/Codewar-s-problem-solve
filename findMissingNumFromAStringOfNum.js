/*
Here's a string with numbers from 1 - 21, its missing one number and the string is then shuffled, your'e expected to return an array of possible missing numbers.

let str = "2198765123416171890101112131415"

findNumber(1, 21, str)
  // => [ 12, 21 ]

You won't be able to tell if its 21 or 12, so its best to return all possible values in an array.
*/

//6kyu

function findNumber(start, stop, string){
    let missingNumber = [];
    for(let i = start; i <= stop; i++){
        if(string.indexOf(i.toString()) === -1){
            missingNumber.push(i);
        }
    }
    return missingNumber
}
console.log(findNumber(1, 28, "24252627281234567891011121314151617181920212223"))
