/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;

    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    month = checkTime(month);
    document.getElementById('date').innerHTML =  month + "-" + date + "-" + year;

    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



