//get consecutive vowels in a string
function getConsecutiveVowels(str) {
    let vowels=['a','e','i','o','u'];
    let letter=str.split('');
    let count=0;
    letter.forEach(el=>{
        if(vowels.includes(el)){
            count+=1
        }   else{
            count==0;
        }   
    })
}
console.log(getConsecutiveVowels("erfaiekjudhyfimngukduo")) 
console.log("hello")