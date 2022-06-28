//You are given an unsorted array containing all the integers from 0 to 100 inclusively. 
//However, one number is missing. Write a function to 
//find and return this number. What are the time and space complexities of your solution?

//sum of 1 ot n.....
//7kyu

function missingNo(nums) {
let len=nums.length;
let sumFromLaw=len*(len+1)/2   //sum of 1 to n in math is n(n+1)/2
let sumOfArray=nums.reduce((a,b)=>a+b)
return sumFromLaw-sumOfArray
    }
  console.log(missingNo([15, 60, 61, 95, 46, 38, 68, 11, 47, 45, 27, 23, 3, 16, 8, 81, 76, 63, 62, 57, 59, 22, 55, 78, 28, 54, 74, 39, 79, 65, 48, 82, 17, 2, 98, 90, 18, 9, 56, 34, 7, 75, 10, 93, 35, 5, 73, 77, 85, 71, 13, 91, 83, 70, 89, 4, 84, 14, 52, 99, 53, 33, 49, 42, 40, 58, 30, 36, 67, 72, 41, 26, 87, 97, 25, 29, 50, 64, 21, 88, 66, 24, 94, 51, 1, 100, 0, 96, 69, 12, 92, 31, 37, 6, 86, 32, 19, 44, 20, 43]))


 