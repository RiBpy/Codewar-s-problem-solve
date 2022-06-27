function isCoprime(x, y) {
    const smaller=x<y?x:y;
      for(let i=2; i<=smaller; i++){
        let xFactors=x%i===0;
        let yFactors=y%i===0
      if(xFactors&&yFactors){
        return false;
            }
        }
        return true;
      }
    console.log(isCoprime(17,34))
    console.log(isCoprime(43,86))
    console.log(isCoprime(12,39))
    console.log(isCoprime(87,3))

    // function isCoprime(x, y) {
    //   let factorsOfX = [];
    //   let factorsOfY = [];
      
    //   for (let i = 1; i <= x; i += 1) {
    //     if (x % i === 0) factorsOfX.push(i);
    //   }
    //   for (let i = 1; i <= y; i += 1) {
    //     if (y % i === 0) factorsOfY.push(i);
    //   }
      
    //   let commonFactors = [];
    //   factorsOfX.forEach(factor => {
    //     if (factorsOfY.includes(factor)) commonFactors.push(factor);
    //   });
      
      
    //   return Math.max(...commonFactors) === 1;
    // }