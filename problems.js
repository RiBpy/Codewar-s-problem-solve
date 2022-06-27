
let newArray=[5,11,13,23,8,24]
newArray.splice(2,1)
let hoursArray=[]
let out=newArray.map(function(value){
    value+=2 
                if(value<12){
                    return value+"AM"
                }  
                if(value>12 && value<24){
                    return value-12+"PM"
                }
                if(value>=24){
                    return value-24+"AM"
               }
     return hoursArray
})
console.log(newArray)
console.log(out)


/*
//multiplication
function operation(a){
  return a*a*a
}
console.log(operation(4))
//return first element
array=[3,23,4,4]
function fElement(array){
return array[0]
}
console.log(fElement(array))

//
*/
/*
//add up the numbers from a single number..
function addUp(n){
    let sum=0
    for (let i=1; i<=n; i++ ){
        sum+=i
    }
    console.log(sum)
}
addUp(99999)
let time=new Date
console.log(time.getMonth()+"-"+time.getDate()+"-"+time.getFullYear())

*/



/*
//pattern
for (let i=1; i<=5; i++){
    let result =''
    for(let j=5;j>=i;j--){
    
        result +=j+""       
    }console.log(result) 
}
*/

/*
let i,j,n=10
for(let i=1 ; i<=n; i++){
    for (let j=1; j<=i; ++j)
        document.write(j)   
     for(let k=n-i; k>=1; k--)
        document.write("*")
        document.write("</br>")   
}
for(let i=1 ; i<=9; i++){
    for (let j=i; j<=9; j++)
        document.write(j)   
     for(let k=n-i; k<=9; k++)
        document.write("*")
        document.write("</br>")   
}
*/
/*
//piramid

function pyramid(n){
    for(let i=1;i<=n; i++){
        let str=" ".repeat(n-i)
        let str2="*".repeat(i*2-1)
        console.log(str+str2+str)
    }
}
pyramid(10)

function pyramid2(n){
    for(let i=1;i<=n; i++){
        let str="*".repeat(n-i)
        let str2=" ".repeat(i*2-1)
        console.log(str+str2+str)
    }
}
pyramid2(10)
*/
/*
function greetings(greet,name){
     function fn(){
         console.log(greet+" "+name.split(" ")[1])
     }
     return fn()
}
greetings("Hello","Md Ri")
*/

/*
//wordcount
function wordcount(str){
    //return str.split(" ").length./
    return str.trim().split(/\s/).length //The \s metacharacter is used to find a whitespace character. 
}
console.log(wordcount("Hello there! it,s a demo text"))
*/
/*
function bubbleSort (x,size)
{
 let i,j,temp=0;
    for(i=0;i<size-1;i++){
        for(j=0; j<size-i-1;j++){
            if(x[j]>x[j+1]){
                temp=x[j];
                x[j]=x[j+1];
                x[j+1]=temp;
            }
        }
    }
    for (i=0;i<size; i++){
        return x[i]
    }
}
var x = [9,4,5,2,1,6,7,0,3];
console.log("Input before bubble sort: " +x);
bubbleSort(x,9);
console.log("Input after bubble sort: " +x);
*/
const demoData = ['Sunshine warming my toes,',
'Underwater fun with my friends.',
'Making homemade ice cream on the porch,',
'Many long nights catching fireflies.',
'Early morning walks to the creek,',
'Reveling in the freedom of lazy days.',];

function frontDoorResponse(Data){
    let  out=Data.map(word => word[0].toUpperCase())
    console.log(out)

}
frontDoorResponse(demoData);

//2nd way

// const demoData = ['emIly sMith', 'angeliNA Jolie', 'braD piTt'];
// const out = demoData.map(word => word[0].toUpperCase())
// console.log(out);



// export function frontDoorPassword(text){
//     let first=text.charAt(0).toUpperCase();
//     let slicedData =text.slice(1);
//     let rest=slicedData.toLowerCase()
//     return first+rest;
// }

// export function backDoorResponse(text){
//     let onlyText=text.trim()
//     let lastLetter=onlyText.charAt(onlyText.length-1);
//     return lastLetter;
// }

// export function backDoorPassword(text){
//  return frontDoorPassword(text)+","+" please";
// }
