//same number of x and o..is present or not...



// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
//   }


//or
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}


//or
//   function XO(str) {
//     const X=['x']
//     const O=['o']
//     let arrX=[];
//     let arrO=[];
//       [...str.toLowerCase()].forEach((letter,index) =>{
//       X.includes(letter)? arrX.push(index):null;
//       });
//       [...str.toLowerCase()].forEach((letter,index) =>{
//       O.includes(letter)? arrO.push(index):null;
//       })
//     let lenX=arrX.length;
//      let lenO=arrO.length;
//      console.log(lenO)
//      console.log(lenX)
//      if(lenX==lenO){
//      return true
//      }else{
//      return false;
//      }
// }
 console.log(XO("zoop"))