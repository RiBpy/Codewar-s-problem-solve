//currying function...retrun function from anther function.

function hello(a) {
  return function world(b){
    return `${a} ${b}`;
  }
}
console.log(hello("hello")("world"));