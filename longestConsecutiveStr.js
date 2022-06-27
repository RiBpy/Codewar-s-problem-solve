function longestConsec(strarr, k) {

    //     let Len = strarr.length;
    //     let res = [];
        
    //     if(Len == 0 || k > Len || k <= 0) return "";
          
    //     for(let i = 0; i <= Len - k; i++){
    //       let temp = strarr[i];
    //       for(let ii = k, jj = 1; ii > 1; ii--, jj++){
    //         temp += strarr[i+jj]
    //       }
    //     res.push(temp);
    //     }
    //    return res.reduce(function (a, b) {
    //           return a.length > b.length ? a : a.length == b.length ? a : b;
    //       });

    var longest = "";
    for(var i=0;k>0 && i<strarr.length-(k-1);i++){
      var tempArray = strarr.slice(i,i+k);  //if k=2 then tempArray=strarr[i],strarr[i+1] means here i=0 and i+k=2 so slice(0,2) will take strarr[0],strarr[1].that means before index2;
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
   return longest;

}
    console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2))

