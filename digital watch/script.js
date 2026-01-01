const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const watch = setInterval(function time(){
    let dateToday = new Date();
    let hou = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hou < 10) hou = "0"+ hou;
    if (min < 10) hou = "0"+ min;
    if (sec < 10) hou = "0"+ sec;


    hours.textContent = hou;
    minutes.textContent = min;
    seconds.textContent = sec;
}) 
