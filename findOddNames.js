//find object which first name's ascii value sum is an odd number.
var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'bd', continent: 'Asia', age: 39, language: 'Java' }
  ];
  // function findOddNames(list) {
  //   var result = [];
  //   for (var i = 0; i < list.length; i++) {
  //     var sum = 0;
  //     for (var j = 0; j < list[i].firstName.length; j++) {
  //       sum += list[i].firstName.charCodeAt(j);
  //     }
  //     if (sum % 2 !== 0) {
  //       result.push(list[i]);
  //     }
  //   }
  //   return result;
  // }



  function findOddNames(list) {
    let odd = [];
    let sum = 0;
    list.forEach(el => {
      let char = [...el.firstName]
      char.forEach(e => sum += e.charCodeAt(0))
      sum % 2 !== 0 ? odd.push(el) : 0
      sum = 0;
    });
    return odd;
  }



 console.log( findOddNames(list1));