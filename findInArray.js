var findInArray = function(array, iterator) {
  array.forEach(function(element,index){
    if(iterator(element)){
      console.log(index);
    }else{
        console.log(-1);
    }
  })
};
console.log(findInArray([1,3,5,6,7], trueIfEven));