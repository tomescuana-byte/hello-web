const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("Buton apăsat!");
});

const myCustomEvent = new Event("customAlert");


btn.addEventListener("customAlert", () => {
  console.log("Acesta este evenimentul meu custom!");
});

btn.addEventListener("click", () => {
  console.log("Buton apăsat!");
  btn.dispatchEvent(myCustomEvent); 
});