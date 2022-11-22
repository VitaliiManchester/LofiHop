function clock() {
    let now = new Date();
    let secs = ('0' + now.getSeconds()).slice(-2);
    let mins = ('0' + now.getMinutes()).slice(-2);
    let hr = now.getHours();
    let Time = hr + ":" + mins + ":" + secs;
    document.getElementById("inside").innerHTML = Time;
    requestAnimationFrame(clock)
}

requestAnimationFrame(clock)