const Body = document.body;

function handleReSize() {
  if (window.innerWidth > 600) {
    Body.classList.remove("body");
    Body.classList.add("high");
  } else if (window.innerWidth > 300) {
    Body.classList.remove("high");
    Body.classList.remove("normal");
    Body.classList.add("body");
  } else {
    Body.classList.remove("body");
    Body.classList.add("normal");
  }
}

window.addEventListener("resize", handleReSize);

// style.css 에 넣어야 할것
// .high{
//     background-color: orange;
// }
// .body{
//     background-color: purple;
// }
// .normal{
//     background-color: skyblue;
// }