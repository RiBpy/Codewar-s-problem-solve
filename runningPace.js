function runningPace(distance,time){
    let [min,sec]=time.split(':').map(el=>parseInt(el));
    let timeInSeconds=Math.floor((min*60+sec)/distance);
    let div=timeInSeconds/60;
    let second=((div-Math.floor(div))*60).toFixed(0);
    return Math.floor(div)+':'+(second<=9?'0'+second:second);
}
console.log(runningPace(15,'75:00'))