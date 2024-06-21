import { dateHandler, handleAddToListClick } from "/handlers/handlers.js";
import { switcher } from "/darklight/darklight.js";

/* Importing month, day and year classes from HTML document */
export let month = document.querySelector(".month");
export let day = document.querySelector(".day");
export let year = document.querySelector(".year");

/* Importing hours, minute and second classes from HTML document */
export let hour = document.querySelector(".hour");
export let minute = document.querySelector(".minute");
export let second = document.querySelector(".second");

/* Importing form input and button from HTML document */
export const inputTask = document.querySelector("#task-input");
export const addToListBtn = document.querySelector("#task-button");
export const taskList = document.querySelector(".list");

/* Other elements */
export const error = document.querySelector(".error-message");
export const removeSingleItem = `<svg class="w-6 h-6 x text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>`;
export const li = document.querySelector("li");

dateHandler();
handleAddToListClick();
switcher();
