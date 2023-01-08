// 5.0 Intevals, 5.1 Timeouts and Dates
// 5.2 PadSstart 5.3 Recap

const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText= `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);

// CSS
// .hidden{
//     display:none;
// }

// HTML
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="css/style.css">
//     <title>momentum</title>
// </head>
// <body>
//     <form class="hidden" id="login-form">  
//     </form>
//     <h2 id="clock">00:00:00</h2>
//     <h1 class="hidden" id="greeting"></h1>
//     <script src="js/greetings.js"></script>
//     <script src="js/clock.js"></script>
// </body>
// </html>