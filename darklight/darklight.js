import {btnDarkToLight, btnLightToDark} from "../handlers/handlers.js"

const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelectorAll("h3");
const li = document.querySelectorAll("li");

export const switcher = () => moon.addEventListener("click", darkToLight);

export function darkToLight() {
    moon.classList.toggle("hidden")
    sun.classList.toggle("hidden")
    document.body.style.backgroundColor = "#656565";
    h1.classList.toggle("lightmode");
    h2.classList.toggle("lightmode");
    h3.forEach(item => {
        item.classList.toggle("lightmode")
    });
    const listItems = document.querySelectorAll(".list li");
    listItems.forEach(item => {
      item.classList.toggle("lightmode");
    });
    btnDarkToLight();
}

sun.addEventListener("click", function() {
    moon.classList.toggle("hidden")
    sun.classList.toggle("hidden")
    document.body.style.backgroundColor = "";
    h1.classList.toggle("lightmode");
    h2.classList.toggle("lightmode");
    h3.forEach(item => {
        item.classList.toggle("lightmode")
    });
    const listItems = document.querySelectorAll(".list li");
    listItems.forEach(item => {
      item.classList.toggle("lightmode");
    });
    btnLightToDark();
})