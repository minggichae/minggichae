const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
const body = document.querySelector("body");
const btn = document.querySelector("button");
function changeColor(event){
    const change1 = colors[Math.floor(Math.random() * colors.length)];
    const change2 = colors[Math.floor(Math.random() * colors.length)];
    body.style.background = "linear-gradient("+`45deg, ${change1}, ${change2}`;")"
} 
    btn.addEventListener("click",changeColor);

// CSS

// body {
//     height: 100vh;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//       Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   }
  
//   button {
//     font-size: 20px;
//   }
  

// HTML

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Vanilla Challenge</title>
//     <meta charset="UTF-8" />
//     <link rel="stylesheet" href="src/style.css" />
//   </head>

//   <body>
//     <button>Give me color</button>
//     <script src="js/index.js"></script>
//   </body>
// </html>
