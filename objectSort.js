let obj1=[
{ name:"Kb",age:22,location:"BD"},
{name:"Ba",age:23,location:"BD",},
{ name:"Ka",age:27,location:"BD"},
{ name:"La",age:11,location:"BD"},
{name:"Pa",age:29,location:"BD",}
]

function sortObj(obj){
  return obj.sort((a,b)=>a.age-b.age) || obj.sort((a,b)=>a.name-b.name)
}
console.log(sortObj(obj1))
