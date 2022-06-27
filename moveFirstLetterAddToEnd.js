// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



//5kyu
//(/[A-z]/i) regular expression to match all letters...site(https://regexr.com)
function pigIt(str){     
      return str.split(" ").map((el)=>{
          return el.match(/[a-z]/i)/*regex-any letter from a-z and i-case insensitive */?`${el.substring(1)}${el.charAt(0)/*substring(0,1) can also be used*/}ay`:el  //if the element is a word, move the first letter to the end and add "ay"  here "el" will return same `${el.substring(1)}${el.substring(0,1)}ay`
      }).join(" ")
    }
    console.log(pigIt('Pig latin is cool ?'));
