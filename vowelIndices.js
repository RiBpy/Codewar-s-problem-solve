function vowelIndices(word){
    let arr=[];
    let vowels=['a','e','i','o','u'];
            [...word.toLowerCase()].forEach(
                (letter,index) => 
                    vowels.includes(letter) ? arr.push(index+1) : null
            );
    return arr;
    }
console.log(vowelIndices('WctlYxZcuJtJUPWC'));
console.log(vowelIndices('VwMPuseogenXNQivXtAkIyfJHqYnRrcia'));

// function vowelIndices(word) {
//     var arr = [];
//     for(var i = 0; i < word.length; i++) {
//       if(/[aeioyu]/i.test(word[i])) {
//         arr.push(i+1);
//       }
//     }
//     return arr;
//   }

// function isIsogram(str){
//     let arrOfLetter=str.toLowerCase().split('');
//     let arrOfLetterUnique=arrOfLetter.filter((letter,index)=>arrOfLetter.indexOf(letter)===index);
//     return arrOfLetterUnique.length===arrOfLetter.length;   

// }
// console.log(isIsogram("Dermatoglyphics"));