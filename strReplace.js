
  function strReplace(str){
      return str.split(".").map(function(word){
            return word.replace();
      }).join('-')
  }
    console.log(strReplace('The.quick.brown.fox.jumps.over.the.lazy.dog'));


function fakeBin(x){
return x.split('').map(function(num){
    return num < 5 ? 0 : 1;
}   ).join('');     }
console.log(fakeBin('45385593107843568'));
