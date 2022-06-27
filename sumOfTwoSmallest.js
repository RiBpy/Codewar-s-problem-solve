function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort((a, b) => {return a - b} );
    return numbers[0] + numbers[1];
  };
  console.log(sumTwoSmallestNumbers([1125, 8, 12, 19, 22]));


  //or


//   let array=[1,1,1,2,3,5,5,5,6,6,9,9,9]
// function sumTwoSmallestNumbers(numbers) {  
//  let min1=Math.min(...numbers)
// let spl1=numbers.filter(a=> a!=min1);
// let min2=Math.min(...spl1)
// return min1+min2
// }
// console.log (sumTwoSmallestNumbers(array)); 
