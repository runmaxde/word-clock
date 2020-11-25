var hour = 1;
var minute = 1;

function runInit(){
    let today = new Date();
    hour = today.getHours();
    minute = today.getMinutes();
    console.log("hallo")
    flipClock();
    setInterval(flipClock, 60000);
}

function flipClock(){
    if(minute == 60){
        minute = 0;
        hour ++;
    }
    
    if(hour == 13){
        hour = 1;
    }
    if(hour > 12){
        hour = hour - 12;
    }
    
    console.log(hour, minute)
    kickClock(hour, minute);
    minute++;
}
