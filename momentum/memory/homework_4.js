const Dday = document.querySelector("#Dday");

function day(){
    const today = new Date();
    const todayYear = today.getFullYear();
    const christmas = new Date(`${todayYear+1}/1/1`);

    const remain = christmas.getTime() - today.getTime();

    const remainDay = Math.floor(remain/(1000*60*60*24));
    const remainhours = String(Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    const remainminutes = String(Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const remainseconds = String(Math.floor((remain % (1000 * 60)) / 1000)).padStart(2, "0");

    clock.innerText = `${remainDay}d ${remainhours}h ${remainminutes}m ${remainseconds}s`;
}

day();
setInterval(day,1000);

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
//     <h1>Time Until Christmas Eve</h1>
//     <h2 id="Dday"></h2>
//     <h2 id="clock"></h2>
//     <h1 class="hidden" id="greeting"></h1>
//     <script src="js/clock.js"></script>
// </body>
// </html>
