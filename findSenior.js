var list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];
  //find senior sorting by age..return first two elements
  function findSenior(list) {
    let res = [];
    let sl=list.sort(function (a, b) {
      return b.age - a.age;
    })
   sl.map((pAge,i)=>{
     if(sl[0].age===pAge.age){
       res.push(sl[i])
     }
     })
    return res
  }
  console.log(findSenior(list1))


//   function findSenior(list) {
//     var maxAge = Math.max(...list.map(person => person.age));
//     return list.filter(person => person.age === maxAge);
//   }


console.log("Av".charCodeAt());