/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function saveNotes(){
    var currentNotes = $("textarea").val()
    localStorage.setItem("notes", currentNotes)
}
$("#saveNotesBtn").click(saveNotes)

$(document).ready(function(){
    var savedNotes = localStorage.getItem("notes")
    $("textarea").val(savedNotes)
});