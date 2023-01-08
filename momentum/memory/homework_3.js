const numberForm = document.querySelector("#number-form");
const machineInput = document.querySelector("#h2number input");
const numberInput = document.querySelector("#h3number input");
const numbercheck = document.querySelector("#numbercheck");
const numbercheck2 = document.querySelector("#numbercheck2");
const winner = document.querySelector("#winner");

const HIDDEN_CLASSNAME = "hidden";

function onNumberSubmit(event){
  event.preventDefault();

  const usernumber = numberInput.value;
  const machinenumberInput = machineInput.value;
  const machinenumber = Math.floor(Math.random()*machinenumberInput);
  numbercheck.innerText = `You chose: ${usernumber}`;
  numbercheck2.innerText = `the machine chose: ${machinenumber}`;
  numbercheck.classList.remove(HIDDEN_CLASSNAME);
  numbercheck2.classList.remove(HIDDEN_CLASSNAME);
  if(usernumber==machinenumber)
  {
    winner.innerText=`You Win!`;
    winner.classList.remove(HIDDEN_CLASSNAME);
  }else{
    winner.innerText=`You Lost!`;
    winner.classList.remove(HIDDEN_CLASSNAME);
    add
  }
}

numberForm.addEventListener("submit",onNumberSubmit);

// CSS
// .hidden{
//   display:none;
// }

// HTML
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css">
//     <title>momentum</title>
// </head>
// <body>
//     <h1>Random Number Game</h1>
//     <form id = "number-form">
//     <h2 id = "h2number">Generate a number betwween 0 and
//     <input
//     type="text"
//     placeholder=""
//     />
//     </h2>
//     <h3 id = "h3number">Guess the number: 
//     <input
//     type="text"
//     placeholder=""
//     />
//     <input type="submit" value="Play!"/>
//     </h3> 
//     </form>
//     <h5 id="numbercheck" class="hiden"></h5>
//     <h5 id="numbercheck2" class="hidden"></h5>
//     <h4 id="winner" class="hidden"></h4>
//     <script src="app.js"></script>
// </body>
// </html>