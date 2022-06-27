
let ADD=function add(num){ return num+1}
let MUL=function mul(num){return  num*30}
function chain(num,[ADD,MUL]) {
    return (num+1)*30
}


let arr=["a","b","c","d","e"];
let arr2=["hello","world"];
console.log(arr2.join(" "));