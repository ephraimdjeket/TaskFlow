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
  error, removeSingleItem
} from "../index.js";

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

    if (!errorDisplayed) { // Check if error message is not already displayed
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
        const li = document.createElement("li");
        li.innerHTML = `${inputTask.value} ${removeSingleItem}`;
        taskList.append(li);
      }
    }
  });
};
