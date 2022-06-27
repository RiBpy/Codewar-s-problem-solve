 //4kyu
 
 // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
    
    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc
    
    // the correctly sorted array should be returned.




//using built in methods
// function removeZeros(array) {
//     return array.filter(e=>Number(e)!==0).concat(array.filter(e=>Number(e)===0))

//   }
//   console.log(removeZeros([7, 2, 3, 0, 4, 6, "0", 0, 13, 0, 78, 0, 0, 19, 14]))



//without using built in methods

  function removeZeros(array) {
    let nonZero=[],zero=[];

    for(let i=0; i<array.length; i++){
      if(Number(array[i])===0 && array[i]!==null && array[i]!==undefined && array[i]!=='' && array[i]!==true && array[i]!==false){
        zero[zero.length]=array[i]; //if the element is zero, push it to the zero array
      }else{
        nonZero[nonZero.length]=array[i];  //if the element is not zero, push it to the nonZero array
      }
    }
    return [...nonZero,...zero]
  }
  console.log(removeZeros([7, 2, 3, 0,null, 4, 6, 0, 0, 13,null, 0, 78, 0, 0, 19, 14]))