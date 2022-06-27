// function getMiddle(s)
// {
// let len=s.length;
// if(len%2===0){
//   return s.substring(len/2-1,len/2+1); //return the middle 2 char   
// }else{
//     return s.substring(len/2,len/2+1); //return the middle 1 char
// }
// }

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
  //Math.ceil gives the next highest integer
}
console.log(getMiddle("testing")); 


