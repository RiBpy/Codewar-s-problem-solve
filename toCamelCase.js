function toCamelCase(str){
    return str.split(/_|-/).map(function(word, index){
        return index == 0 ? word : word[0].toUpperCase() + word.slice(1); //here we are using the ternary operator ...slice(1) gives us the string without the first letter
    }).join("");
}
console.log(toCamelCase("the-stealth_warrior"));


//function toCamelCase(str){
//     return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
// }