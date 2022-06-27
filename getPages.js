const getPages = (length, currentPage, size) => {
length==1?[]:0;
let pages = [1,3,4,5,10];
let result = []; 
let start = currentPage - size; 
let end = currentPage + size;
if(start < 1){
    start = 1;
}else{
    start = start;
}
if(end > length){
    end = length;   
}else{
    end = end;      
}
for(let i = start; i <= end; i++){
    result.push(i);
}   
return result;
}
console.log(getPages(10,5,2));