let text=document.querySelector("h1")
text.textContent="Two-Sum"
console.log(text)



let nums=[3,6,11,15]
let target=9
let start=0
let end=nums.length-1
let newNums=[]
  let twoSum=nums.map(function(target){
  let sum=nums[start]+nums[end];
    if(sum==target){
      newNums[0]=start;
      newNums[1]=end;
    }if (sum<target){
      start++
    }else{
      end--
    }
  return newNums
})
console.log(twoSum)
