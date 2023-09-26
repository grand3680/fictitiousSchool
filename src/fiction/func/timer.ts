var interval : any;
var isActive : boolean = false;

var startTimer = (desp : string) : void => {
    var time = 0;

    let element : any = document.getElementById("timer-list");

    interval = setInterval(() => {
        time += 1;
        element.textContent = `${desp} - ${time}`;
    }, 1000)
    interval;    
}

var timer = {
    "interval" : interval,
    "isActive" : isActive,

    "startTimer" : startTimer,

}

export default timer;

