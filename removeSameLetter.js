//remove same letter/number from a string,if same letter/number continues return 1 set.

function condense(str){
  // return [...new Set(str.split(''))].join('');
   let letter=str.split(' ');
    let result=[];
   letter.forEach((el,i)=>{
         if(letter[i+1]===el){
            letter.splice(i,letter[i+1].length);
            result.push(letter)
         }
   })
   return result.toString();
}
console.log(condense("1 2 3 1 2 3 3 3 2"))