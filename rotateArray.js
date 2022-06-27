function rotate(array,n){
    let abs=Math.abs(n%array.length);
    if(n>=0){
    let splitted=array.splice(array.length-abs,abs);
    return [...splitted,...array];
    }else{
    let splitted=array.splice(0,abs);
    return [...array,...splitted];
    }
    }
    console.log(rotate([1, 2, 3, 4, 5],12478));

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