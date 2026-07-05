setInterval(function () {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    function addZero(unit) {
        if (unit < 10) {
            unit = "0" + unit;
        }
        return unit;
    }

    hour = addZero(hour);
    min = addZero(min);
    sec = addZero(sec);

    let currTime = hour + ":" + min + ":" + sec;

    const time = document.getElementById("time");
    time.innerText = currTime;

}, 1000);



