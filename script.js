"use strict";

let string = "";
let buttonContent;
const buttons = document.querySelectorAll(".btn-grid");
const display = document.querySelector(".display");
const multiply = "\u00D7";
const divide = "\u00F7";

const appendToString = function () {
  if (buttonContent === divide) {
    string += "/";
  } else if (buttonContent === multiply) {
    string += "*";
  } else {
    string += buttonContent;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttonContent = e.target.innerHTML;

    if (buttonContent === "=") {
      string = eval(string);
    } else if (buttonContent === "AC") {
      string = "";
    } else if (buttonContent === "DEL") {
      string = string.substring(0, string.length - 1);
    } else if (
      buttonContent === "+" ||
      buttonContent === "-" ||
      buttonContent === multiply ||
      buttonContent === divide
    ) {
      //This part checks for Operators and prevents the case of multiple operators
      if (
        string[string.length - 1] === "+" ||
        string[string.length - 1] === "-" ||
        string[string.length - 1] === "*" ||
        string[string.length - 1] === "/"
      ) {
        string = string.substring(0, string.length - 1);
        appendToString();
      } else {
        appendToString();
      }
    } else if (buttonContent === divide) {
      string += "/";
    } else if (buttonContent === multiply) {
      string += "*";
    } else {
      string += buttonContent;
    }

    display.innerHTML = string;
  });
});
