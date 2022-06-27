//if no repeated letters, return true

// function isIsogram(str){
//     var i, j;
//     str = str.toLowerCase();
//     for(i = 0; i < str.length; ++i)
//       for(j = i + 1; j < str.length; ++j)
//         if(str[i] === str[j])
//           return false;
//     return true;
  
//   }

//   function isIsogram(str){
//     let arrOfLetter=str.toLowerCase().split('');
//     let arrOfLetterUnique=arrOfLetter.filter((letter,index)=>arrOfLetter.indexOf(letter)===index);
//     return arrOfLetterUnique.length===arrOfLetter.length;   

// }
// console.log(isIsogram("Dermatoglyphics"));



//str=aba ...Set makes it 'a','b'  that means size is not equal to length...so return false

function isIsogram(str){
     return new Set(str.toLowerCase()).size===str.length   //Set gives us an array of unique letter
}
console.log(isIsogram("Dermatoglyphics"));