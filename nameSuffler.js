// function nameShuffler(str){
    //     let fn=str.split(' ').slice(0,1).join('');
    //     let ln= str.split(' ').slice(1).join(' ');
    //     let fullName=ln+' '+fn;
    //     return fullName;
        
    // }
    // console.log(nameShuffler('john McClane'))

    function nameShuffler(str){
        return str.split(' ').reverse().join(' ');
    }
    console.log(nameShuffler('john McClane'))