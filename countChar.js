                 String.prototype.characterCount = function(charToCount){ 
                     if(this.length===0 && charToCount===undefined){
                         return undefined;
                     }else if(Array.isArray(charToCount)){
                        return charToCount.map((char)=>{
                            if(this.includes(char)){
                                return this.split(char).length-1;
                            }else{
                                return 0;
                            }
                        })
                    }else if(charToCount.length>1){
                        let splittedChar=charToCount.split("");
                        return this.split('').map( function(l,i){ if(l === splittedChar) return i;} )
                        .filter(Boolean)
                        
                    }else{
                            return this.split('').map( function(l,i){ if(l === charToCount) return i;} )
                            .filter(Boolean)
                        }
                        
                     }

                  console.log("booop-booop-deee-doo-dooop".characterCount(['a','d','o','o','d','a']));
                  console.log("booop-booop-deee-doo-dooop".characterCount("ado"));
                  console.log("booop".characterCount("p"));
                  console.log("booop".characterCount());
                  console.log("".characterCount());