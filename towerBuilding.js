// function towerBuilder(nFloors) {
//    let arr=[];
//    for (let i=0;i<nFloors;i++){
//          let str="";
//          for (let j=0;j<nFloors-i-1;j++){
//               str+=" ";
//          }
//          for (let k=0;k<2*i+1;k++){
//               str+="*";
//          }
//          for (let l=0;l<nFloors-i-1;l++){
//             str+=" ";
//        }
//          arr.push(str);
        
//     }
//     return arr;
//        }

function towerBuilder(nFloors) {
    // build here
    let space,star, tower = [];
    for(i = 1; i <= nFloors; i++){
      space = " ".repeat(nFloors - i);
      star  = "*".repeat((2*i) - 1);
      tower.push(`${space}${star}${space}`);
    }
    return tower
  }



// function towerBuilder(nFloors) {
//     var tower = [];
//     for (var i = 0; i < nFloors; i++) {
//     tower.push(" ".repeat(nFloors - i - 1)
//     + "*".repeat((i * 2)+ 1)
//     + " ".repeat(nFloors - i - 1))
//     }
//     return tower;
// }
 console.log(towerBuilder(5))