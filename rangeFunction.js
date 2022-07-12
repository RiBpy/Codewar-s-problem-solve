/*Let's implement the range function:

range([start], stop, [step])

range(1, 11);
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

range(1, 4, 0); // /!\ note that the step is 0
=> [1, 1, 1]

range(0);
=> []

range(10, 0); // /!\ note that the end is before the start
=> []

range(10);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

range(0, 30, 5);
=> [0, 5, 10, 15, 20, 25]

start, if omitted, defaults to 0; step defaults to 1.

Returns a list of integers from start to stop, incremented by step, exclusive.

Note that ranges that stop before they start are considered to be zero-length instead of negative.
 */

function range(start=0,end,step=1) {
    let arr = [];
    if(end<start || end==0){
        return []; 
    }else{
    
        if(step==0){
         for(let i=start;i<end;i++){
             arr.push(start)
         }
         }
        else{
            if(end===undefined){
                end=start;
                  for(let i = 0; i <= end-1; i++){
                      arr.push(i);
                  }
              }   
              else if(step === undefined){
                  for(let i = start; i <= end-1; i++){
                      arr.push(i);
                  }
              }
              else{
                  for(let i = start; i <= end-1; i+=step){
                      arr.push(i);
                  }
              }
         }
        }
 
    return arr;
}
console.log(range(10));


/*const range = (...args) => {
  [start, end, step] = args.length == 1 ? [0, ...args, 1] : args.length == 2 ? [...args, 1] : args;
  return (args && start <= end) ? [...Array(Math.ceil((end - start) / (step||1)))].map((_, i) => start + i * step) : [];
}; */