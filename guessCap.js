// function guessHatColor(a,b,c,d) {
//     console.log(a,b,c)
//     if(a==="black"&& c==="black" ||a==="white"&&c==="white"){
//       return 2
//     }else if(b==="black" &&c==="black"||b==="white" &&c==="white"){
//       return 1
//     }else if(a==="black"&& b==="black" ||a==="white" &&b==="white"){
//       return 2
//     }else{
//         return 3
//     }
//   }


  guessHatColor = (a, b, c, d) => b == c ? 1 : 2; 
  console.log(guessHatColor("white","white","black","black"))

  