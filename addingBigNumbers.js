// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Example

// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// Notes

//     The input numbers are big.
//     The input is a string of only digits
//     The numbers are positives


//4kyu

// function add(a, b) {
    
//     //  let result= BigInt(a) + BigInt(b);
//     //     return result.toString();function add(A, B) {
//   const aLen = a.length
//   const bLen = b.length
//   const maxLen = Math.max(aLen, bLen)

//   let carry = 0, sum = ''

//   for (let i = 1; i <= maxLen; i++) {
//     let X = +a.charAt(aLen - i)
//     let Y = +b.charAt(bLen - i)

//     let t = carry + X + Y
//     carry = t/10 |0
//     t %= 10

//     sum = (i === maxLen && carry)
//       ? carry*10 + t + sum
//       : t + sum
//   }

//   return sum
// }


function add(a, b) {
    a = a.split("").reverse();
    b = b.split("").reverse();
    let maxLen=Math.max(a.length, b.length);
    var sum = [];
    var remainder = 0;
    for (var i = 0; i <maxLen; i++) {
      var x = parseInt(a[i]) ? parseInt(a[i]) : 0;
      var y = parseInt(b[i]) ? parseInt(b[i]) : 0;
      var digit = (x + y + remainder) % 10;
      remainder = Math.floor((x + y + remainder) / 10);
      sum.unshift(digit);
    }
    if (remainder) {sum.unshift(remainder)}
    
    return sum.join("");
  }
  console.log(add('63829983432984289347293874', '90938498237058927340892374089'));

