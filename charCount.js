// function charCount(str,charToCount){
//     let splittedChar=charToCount.split("");
//         return splittedChar.map((char)=>{
//           if(str.includes(char)){
//             return str.split(char).length-1;
//           }else{
//             return 0;
//           }
//         })
// }
// console.log(charCount("hello world","lr"));



String.prototype.characterCount = function(charToCount){   
    if(charToCount===undefined && this.length>0){
        return 0;
    } else  if (charToCount===undefined && this.length===0){
    return undefined;
    } else{
        if(Array.isArray(charToCount)){
            return charToCount.map((char)=>{
                if(this.includes(char)){
                    return this.split(char).length-1;
                }else{
                    return 0;
                }
            })
        }else{
            if(charToCount.length>1){
                let splittedChar=charToCount.split("");
                return splittedChar.map((char)=>{
                    if(this.includes(char)){
                        return this.split(char).length-1;
                      }else{
                        return 0;
                      }
            })
            }else{
                if(this.includes(charToCount)){
                    return this.split(charToCount).length-1;
                }
            }
        }
        
    }   
        
}

console.log("booop-booop-deee-doo-dooop".characterCount(['a','d','o','o','d','a']));
console.log("booop".characterCount());
console.log("".characterCount());

