
function twoDiff(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]!=arr[j]){
                newArr.push([arr[i],arr[j]]);
            }
        }
    }
    return newArr;
}
console.log(twoDiff(1,2,3,6,8))






    