var number = function(busStops){
    let remains=0;
    busStops.map((el)=>{
      let getIn=el[0]
      let getOut=el[1]
      remains+= getIn-getOut
    })
    return remains
  }

  //const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)
  console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))