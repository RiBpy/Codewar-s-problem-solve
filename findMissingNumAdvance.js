// An Arithmetic Progression is defined as one in which 
// there is a constant difference between the consecutive terms of a given series of numbers.
//  You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: 
//  exactly one term from the original series is missing from the set of numbers which have been given to you.
// The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers.
// The missing term will never be the first or last one.

// function findMissing(list){
//    let diff=list[2]-list[1];
//    let missing=0;
//    for(let i=0; i<list.length-1; i++){
//        if(list[i+1]-list[i]!==diff){
//           return missing=list[i]+diff
//        }
//     }
//     return missing
//   }



//positive and negative numbers
  var findMissing = function (list) {  
   var sumFromLaw = (list[0] + list[list.length - 1]) * (list.length + 1) / 2;   //only positive numbers-n*(n+1)/2
   var sum = list.reduce((a,b)=>a+b);
   return sumFromLaw - sum;
 }
  
  console.log(findMissing([-5,-1,1,3,5,7,9,11]))