const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

setInterval(() => {
    console.log("tick-tick");
    const time = new Date();
    let hour = 30 * (time.getHours() % 12) + 0.5 * time.getMinutes();
    let minute = 6 * time.getMinutes();
    let second = 6 * time.getSeconds();

    secondHand.style.transform = `translate(-50%, -50%) rotate(${second}deg)`;
    console.log("s", time.getSeconds());
    minuteHand.style.transform = `translate(-50%, -50%) rotate(${minute}deg)`;
    console.log("m", time.getMinutes());
    hourHand.style.transform = `translate(-50%, -50%) rotate(${hour}deg)`;
}, 1000);
0;
