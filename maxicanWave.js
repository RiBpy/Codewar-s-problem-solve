function wave(str){
    let result = [];
    str.length==0?[]:str.toLowerCase().split('').filter((el,i)=>{
        let temp = str.charAt(i)
           if(temp!==" "){
            if(temp.toUpperCase() === temp){
                result.push(str.substring(0,i).toLowerCase() +temp+ str.substring(i+1,str.length).toLowerCase())          
            }else{
                result.push(str.substring(0,i).toLowerCase() +temp.toUpperCase()+ str.substring(i+1,str.length).toLowerCase())
            }
           }else{
            return null
           }
    })
    return result
  }

  /*
  function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}
  */
  console.log(wave("hi bangla"))
 