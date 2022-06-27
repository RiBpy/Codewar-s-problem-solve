//interlock checking if binary value 1 is in the same position of both array elements;if so,return true;else return false
function interLock(arr) {
    var result = false;
    var binary1 = arr[0].toString(2);
    console.log(binary1);
    var binary2 = arr[1].toString(2);
   let len=Math.max(binary1.length, binary2.length);
    console.log(binary2)
    for (let i=0; i<=len; i++) {
        if (binary1[i] && binary2[i]===1) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}
console.log(interLock([3, 6]));