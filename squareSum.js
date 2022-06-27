// function squareSum(numbers){
//     let sum=0;
//     for (let i=0; i<numbers.length;i++){
//        sum=sum+numbers[i]*numbers[i];
       
//     }
//     return sum
//     }
//     console.log(squareSum([1,4]));

function squareSum(numbers){
   return  numbers.reduce((sum,number)=>{
      return (number*number)+sum
},0)
}
   //or
// function squareSum(numbers){
//     var sum = 0;
//     numbers.forEach(function(n) {
//       sum += n * n
//     });
//     return sum;
//   }

    console.log(squareSum([-11,17]))
   