function rotate(array,n){
  let len = array.length;
  if(n==0){
    return array
  }else{
    if(n>0){
      n>len?n=n%len:n
      let firstPart=array.slice(len-n,len);
      let lastPart=array.slice(0,len-n);
      return [...firstPart,...lastPart]
     }else{
      Math.abs(n)>len?n=Math.abs(n)%len:n=Math.abs(n)
      let firstPart=array.slice(0,n);
      let lastPart=array.slice(n,len);
      return [...lastPart,...firstPart]
     }
  }
}
//function rotate(array, n) {
//   n = n % array.length
//   return array.slice(-n).concat(array.slice(0, -n))  //if n=2 then -n=-2, 4,5 will be sliced and will add to starting of the array..or n=-2=>-n=2 then 3,4,5 wil be sliced and added to the last
// }
    console.log(rotate([1,2,3,4,5],-12477));
console.log([1,2,3,4,5].slice(2))
