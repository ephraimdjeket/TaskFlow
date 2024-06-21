import {
  month,
  day,
  year,
  hour,
  minute,
  second,
  inputTask,
  addToListBtn,
  taskList,
  error, removeSingleItem, li
} from "../index.js";

import { darkToLight } from "../darklight/darklight.js";

const currentMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
];

let date = new Date();
let monthIndex = date.getMonth();
let currentDay = date.getDate().toString().padStart(2, "0");
let currentYear = date.getFullYear();

export function dateHandler() {
  /* Dynamically adding the current month, day and year */
  month.innerText = currentMonth[monthIndex];
  day.innerText = `${currentDay}th`;
  year.innerText = currentYear;

  /* Dynamically adding the current hours, minutes and seconds */
  setInterval(() => {
    let date = new Date();
    hour.innerText = date.getHours();
    minute.innerText = date.getMinutes().toString().padStart(2, "0");
    second.innerText = date.getSeconds().toString().padStart(2, "0");
  }, 1000);
}

let errorDisplayed = false;

export const handleAddToListClick = () => {
  addToListBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (!errorDisplayed) {
      if (inputTask.value.trim() === "") {
        const errorText = document.createElement("p");
        errorText.textContent = "Add a task to the list.";
        error.style.display = "block";
        error.appendChild(errorText);
        errorDisplayed = true;

        setTimeout(() => {
          errorText.remove();
          error.style.display = "none";
          errorDisplayed = false;
        }, 2000);
      } else {
        const sanitizedTask = DOMPurify.sanitize(inputTask.value);
        const li = document.createElement("li");
        li.innerHTML = `${sanitizedTask} ${removeSingleItem}`;
        taskList.append(li);
        if (document.body.classList.contains("darkmode")) {
          li.style.color = "#656565";
        } else {
          li.style.color = "dark";
        }
        li.addEventListener("click", function () {
          li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
        });

    const removeBtn = li.querySelector('.w-6.h-6.x');
        removeBtn.addEventListener("click", function (e) {
          li.remove();
      })
      }
    }
  });
};

export function btnDarkToLight() {
  addToListBtn.style.backgroundColor = "white";
  addToListBtn.style.color = "#464646";
  addToListBtn.addEventListener("mouseenter", function() {
      addToListBtn.style.backgroundColor = "#dcdcdc";
    });
    addToListBtn.addEventListener("mouseleave", function() {
      addToListBtn.style.backgroundColor = "white";
    });
}

export function btnLightToDark() {
  addToListBtn.style.backgroundColor = "#3d3d3d";
  addToListBtn.style.color = "";
  addToListBtn.addEventListener("mouseenter", function() {
      addToListBtn.style.backgroundColor = "#656565";
    });
    addToListBtn.addEventListener("mouseleave", function() {
      addToListBtn.style.backgroundColor = "#3d3d3d";
    });
}