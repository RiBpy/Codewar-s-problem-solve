
  function hi(val){
        let arr=val.split(' ');
        let newArr=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i].length==1){
                newArr.push(arr[i].toUpperCase());
            }else{
                newArr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
            }
        }
        return newArr.join(' ');
  }
  console.log(hi('hello world'))


  function endsWIth(str,end){
      return str.endsWith(end);
  }
    console.log(endsWIth('hello world','world'));