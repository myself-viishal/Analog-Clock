const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

setInterval(() => {
    const time = new Date();
    let hour = 30 * (time.getHours() % 12) + 0.5 * time.getMinutes();
    let minute = 6 * time.getMinutes();
    let second = 6 * time.getSeconds();

    secondHand.style.transform = `translate(-50%, -50%) rotate(${second}deg)`;
    minuteHand.style.transform = `translate(-50%, -50%) rotate(${minute}deg)`;
    hourHand.style.transform = `translate(-50%, -50%) rotate(${hour}deg)`;
}, 1000);

