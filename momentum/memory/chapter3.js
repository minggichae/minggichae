// 3.0 The Document Object
// console 창에 document를 입력하면 HTML을 보여준다 
// (document는 이미 존재하는 object)

const title = document.getElementById("title");

// 3.1 HTML in Javascript

console.dir(title);
title.innerText = ("Got you!");
console.log(title.id);
console.log(title.className);

// 3.2 Searching For Elements

const hellos = document.getElementsByClassName("hello");
console.log(hellos); 

const title = document.getElementsByTagName("h1");

// querySelector는 element를 CSS 방식으로 검색
// 즉, hello란 class 내부에 있는 h1을 가지고 올 수 있다.
// 단 하나의 elements만 return해준다.
// helloe class 안에 h1이 많이 있어도 젤 위에있는 h1을 호출한다.
// h1을 다 호출 하는 것은 querySelectorAll을 입력
// elements의 내부를 보고 싶으면 console.dir("???"");를 입력하면된다.

const title = document.querySelector("div.hello:first-child h1");
title.innerText = "Hello";

// 밑에 두 줄은 같은 의미를 띈다 querySelector은 id를 나타내는 #을 추가해준다.
const title = document.querySelector("#hello h1");
const title1 = document.getElementById("hello");

title.style.color="blue";

// 3.3, 3.4, 3.5 Events

// click event

const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click(){
    h1.style.color = "blue";
    console.log("h1 was clicked!");
}

function handleMouseEnter(){
    console.log("mouse is here!");
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handelWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL Good");
}

h1.addEventListener("click", handleh1Click);
h1.onclick = handleh1Click;
h1.addEventListener("mouseenter",handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave",handleMouseLeave);
h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handelWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

// 3.6 CSS in Javascript part One

const h1 = document.querySelector("div.hello:first-child h1");
h1.innerText = "Hello!";

function handleTitleClick(){
    const curretnColor = h1.style.color;
    let newColor;
    if(curretnColor === "blue"){
    newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

// 3.6, 3.7, 3.8 CSS in Javascript

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked"
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    } // 이 5줄의 코드를 toggle 하나로 표현이 가능하다.
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);