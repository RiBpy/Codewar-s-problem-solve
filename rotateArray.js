function rotate(array,n){
    Math.abs(n)>array.length?n=n%array.length:n;
    if(n<0){
        n=Math.abs(n)
        return array.slice(n,array.length).concat(array.slice(0,n));

    }else{
        return array.slice(n-1,array.length).concat(array.slice(0,n-1));
    }
    
}
    console.log(rotate([1, 2, 3, 4, 5],-3));



    function closeCompare(a, b, margin){
        if(margin>0){
          if(margin>=a-b){
           return 0
           }else if(a<b){
          return -1
            }else{
              return 1
            }
        }else{
          margin=0
        }
      }
        
      console.log(closeCompare(4,5,3))

