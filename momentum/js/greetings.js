// 4.0 Input Values, 4.1 Form Submission
// 4.2, 4.3 Events, 4.4 Getting Username
// 4.5 Saving Username, 4.6 Loading Username
// 4.7 Recap (복습)

// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// 위 아래 둘다 같은 뜻
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();  // onLoginSubmit function에 대한 argument로
                           // 정보를 얻어오는 함수 이 정보는 실행된
                           // event에 대한 여러 정보이다.
                           // 이 함수가 하는 일은 어떤 event의 기본 행동을
                           // 발생되지 않도록 막는 것이다.
                           // 즉, 브라우저의 기본 행동을 막는 것  (새로고침)

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // 둘 다 같은 의미로 쓰임
  // greeting.innerText = "Hello " + username;
  // greeting.innerText = `Hello  ${username}`;

  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(username);

  // console.log("hello",loginInput.value);
  // console.log("click!");

  // if(username === ""){
  //   alert("Please write your name");
  // } else if(username.length > 15){
  //   alert("Your name is too long")
  // }

  // console.log(username);
  // console.log(loginInput.value);
}

// loginButton.addEventListener("click",onLoginBtnClick);
loginForm.addEventListener("submit",onLoginSubmit);

// 4.3
// const link = document.querySelector("a");

// function handelLinkClick(event){
//   event.preventDefault();
// }

// link.addEventListener("click",handelLinkClick);

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
} else {
  // show the greeting
  // greeting.innerText = `Hello ${savedUsername}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}

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
//     <link rel="stylesheet" href="style.css">
//     <title>momentum</title>
// </head>
// <body>
//     <form class="hidden" id="login-form">
//     <input 
//     required maxlength="15"
//     type="text"
//     placeholder="What is your name?"
//     />
//     <input type="submit" value="Log In"/>
//     </form>
//     <!-- <a href="https://nomadcoders.co">Go to courses</a> -->
//     <h1 id="greeting" class="hidden"></h1>
//     <script src="app.js"></script>
// </body>
// </html>