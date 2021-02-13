const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const headerTime = document.querySelector(".header-time");


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) *360 )+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60) * 360)+90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees =  ((hours/60) * 360)+90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    let weekDay;
    let month;

    switch (now.getDay()) {
        case 0:
         weekDay = "Sunday";
            break;
        case 1:
        weekDay = "Monday";
            break;
        case 2:
         weekDay = "Tuesday";
            break;
        case 3:
         weekDay = "Wednesday";
            break;
        case 4:
        weekDay = "Thursday";
            break;
        case 5:
       weekDay = "Friday";
            break;
        case 6:
        weekDay = "Saturday";
    }


    switch(now.getMonth()) {
        case 0:
        month = "Jan.";
            break;
        case 1:
         month  = "Feb.";
            break;
        case 2:
       month  = "Mar.";
            break;
        case 3:
       month  = "Apr.";
            break;
        case 4:
        month  = "May";
            break;
        case 5:
        month  = "Jun.";
            break;
        case 6:
        month  = "Jul.";
        case 7:
       month  = "Aug.";
            break;
        case 3:
         month  = "Sep.";
            break;
        case 4:
         month  = "Oct.";
            break;
        case 5:
        month  = "Nov.";
            break;
        case 6:
         month = "Dec.";
    }
    
    const day = now.getDate();
    const year = now.getFullYear();

    headerTime.innerHTML = weekDay + ", " + month + " " + day + ", " + year+".";


}

setInterval(setDate, 1000);