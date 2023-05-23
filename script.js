"use strict";

const amount = document.querySelector("#amount");
const people = document.querySelector("#people");
const additionalCosts = document.querySelector("#additionalCosts");
const count = document.querySelector(".count");
const cost = document.querySelector(".cost");
const costInfo = document.querySelector(".cost-info");
const error = document.querySelector(".error");

count.addEventListener("click", countCost);
function countCost() {
  if (amount.value && additionalCosts.value && people.value) {
    const splitedCost = (amount.value * additionalCosts.value) / people.value;
    cost.textContent = splitedCost.toFixed(2);
    error.style.display = "none";
    costInfo.style.display = "block";
  } else {
    error.textContent = "Please complete all required information";
    error.style.display = "block";
    costInfo.style.display = "none";
  }
}
