function inArray(array1,array2){
    let sortedArray1=array1.sort();
    let sortedArray2=array2.sort();
    let result=[];
    sortedArray1.forEach((element)=>{  
              if(sortedArray2.toString().includes(element)){
                    result.push(element);
              }})
                  return result;
}



// function inArray(a1, a2) {
//     var str = a2.join(' ');
//     return a1.filter(s => str.indexOf(s) !== -1).sort();
//   }


  console.log(inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]));