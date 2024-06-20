const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");

export const switcher = () => moon.addEventListener("click", function() {
    darkToLight();
})

function darkToLight() {
    moon.classList.toggle("hidden")
    sun.classList.toggle("hidden")
    document.body.style.backgroundColor = "#656565";
    h1.classList.toggle("lightmode");
    p.classList.toggle("lightmode");
    
}