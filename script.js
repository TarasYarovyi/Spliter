"use strict";

const amount = document.querySelector("#amount");
const people = document.querySelector("#people");
const additionalCosts = document.querySelector("#additionalCosts");
const count = document.querySelector(".count");
const cost = document.querySelector(".cost");

count.addEventListener("click", countCost);
function countCost() {
  if (amount.value && additionalCosts.value && people.value) {
    const splitedCost = (amount.value * additionalCosts.value) / people.value;
    cost.textContent = splitedCost;
  } else {
    document.querySelector(".error").textContent =
      "Please complete all required information";
    document.querySelector(".error").style.display = "block";
    document.querySelector(".cost-info").style.display = "none";
  }
}
