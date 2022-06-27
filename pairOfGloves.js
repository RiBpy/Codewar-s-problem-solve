function numberOfPairs(gloves){
    let pair = 0;
    let obj={};
    for (let i = 0; i < gloves.length; i++) {
        if(!obj[gloves[i]]) obj[gloves[i]]=1
        else obj[gloves[i]]++;
    }
    Object.keys(obj).forEach(key=>{pair=pair+Math.floor(obj[key]/2)})
    return pair; 

}
console.log(numberOfPairs(['gray','black','purple','purple','gray','black','gray','black','purple','purple','gray','black','gray','black','purple','purple','gray','black','gray','black','purple','purple','gray','black']));



//console.log(new Set(['gray','black','red','red','black']));  //to get unique values