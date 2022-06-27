//n^3+(n-1)^3+(n-2)^3+...+1^3=m  so when n=0 n+1=1 so n^3=1 and so on ..
//if n=45 then m=1^3-2^3-3^3-4^3..
//till m=0 then n=45

function findNb(m){
    let n = 0;
    while(m>0){   //while (m > 0) m -= ++n**3
        m -= Math.pow(n+1,3);
        n++;
    }
    if(m===0){
        return n;
    }else{
        return -1;
    }
}
console.log(findNb(41830598349419));



 