const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
 function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90 +minutes*360;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
    
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform=`rotate(${minutesDegrees}deg)`;
    
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`;
    console.log(seconds);
 }
 setInterval(setDate, 1000);

