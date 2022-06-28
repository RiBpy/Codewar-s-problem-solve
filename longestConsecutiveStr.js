//6kyu
/*
by g964
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
Concatenate the consecutive strings of strarr by 2, we get:
treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".
In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
Note
consecutive strings : follow one after another without an interruption
*/

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
    for(var i=0;k>0 && i<strarr.length-(k-1);i++){//if k=2 then last one string won't make any string.so we have to count 1 string before last one.
      var tempArray = strarr.slice(i,i+k);  //if k=2 then tempArray=strarr[i],strarr[i+1] means here i=0 and i+k=2 so slice(0,2) will take strarr[0],strarr[1].that means before index2;
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
   return longest;

}
    console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2))

