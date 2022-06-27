// //153=1^3+5^3+3^3
// function narcissistic(value){
//     let len= value.toString().length;
//     let arr=Array.from(String(value));
//     let sum= arr.map(function(item){ 
//             return Math.pow(item,len);  
//     });
//     let allSum=sum.reduce((a,b) => a+b);
//     if(allSum==value){
//         return true;
//     }else{
//         return false;
//     }
//     }
//     console.log(narcissistic(1652))

//or

    function narc(val){
    return ('' +val).split('').reduce((a,b)=>{
        return a+Math.pow(b,(''+val).length);
    },0)==val;
    }
    console.log(narc(153))

    
