function arrayMatch(arr1,arr2){
    let result=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                result.push(arr1[i]);
            }
        }
    }
    return result;
}
console.log(arrayMatch([1,2,3,4,5],[1,2,3,4,8]));