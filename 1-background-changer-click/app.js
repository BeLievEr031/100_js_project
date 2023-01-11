let btn = document.querySelector("button");
let body = document.body;

btn.addEventListener("click", () => {
  let red = 255 * Math.random();
  let green = 255 * Math.random();
  let blue = 255 * Math.random();
  body.style.background = `rgb(${red},${green},${blue})`;
});
