function balanceStatements(list){ 
   let res=[]
   let Buy=0;
   let Sell=0;
   if(list.length>0)
   {
      let listArr=list.toString().split(', ');
      listArr.map((el)=>{
         let singleEl=  el.split(' ');
         let [Quote,Quantity,Price,Status]=[...singleEl]
         let incDot=Quantity.includes("."),
         notIncDot=!Price.includes(".");
          if(incDot || notIncDot || !Status || !Quote){
            res.push(el);
          }else if(Status==="B"){
            Buy+=parseFloat(Quantity)*parseFloat(Price);
          }else{
             Sell+=parseFloat(Quantity)*parseFloat(Price);
          }
       })
   }else{
      0
   }
   return res.length>0?`Buy: ${Math.round(Buy)} Sell: ${Math.round(Sell)}; Badly formed ${res.length}: ${res} ;`.split(",").join(" ;"):`Buy: ${Math.round(Buy)} Sell: ${Math.round(Sell)}`
  }

  console.log(balanceStatements("GOOG 90 160.45 , JPMC 67 12.8 S, MYSPACE 24.0 210 B, CITI 50 450 B, CSCO 100 55.5 S"))
 