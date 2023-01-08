const h1 = document.querySelector("div.hello:first-child h1");
h1.innerText = "Hello!";

function handleMouseEnter(){
    h1.innerText = "The mouse is here!";
    h1.style.color = "green";
}

function handleMouseLeave(){
    h1.innerText = "The mouse is gone!";
    h1.style.color = "blue";
}

function handelWindowResize(){
    h1.innerText = "You just resized!";
    h1.style.color = "purple";
}

function handleMouseContextmenu(){
    h1.innerText = "That was a right click!";
    h1.style.color = "orange";
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handelWindowResize);
window.addEventListener("contextmenu", handleMouseContextmenu);