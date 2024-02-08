"use strict";

// selector
const totalCharInput = document.querySelector("#total-char");
const upperCaseCheckbox = document.querySelector("#upper-case");
const lowerCaseCheckbox = document.querySelector("#lower-case");
const numberCheckbox = document.querySelector("#numbers");
const symbolCheckbox = document.querySelector("#symbols");
const generateBtn = document.querySelector("#btn");
const passwordBox = document.querySelector("#passBox");
const copyPass = document.querySelector("#copy");

// letterSet
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/<>?";

// Random Data
function getRandomData(setData) {
  return setData[Math.floor(Math.random() * setData.length)];
}

// Generate Random Password
function generatePassword() {
  let password = "";
  const totalChar = parseInt(totalCharInput.value);
  if (isNaN(totalChar) || totalChar < 4 || totalChar > 20) {
    alert(
      "Please enter a valid positive and number between 4 to 20 for total characters."
    );
    return;
  }
  let selectedSets = "";
  if (upperCaseCheckbox.checked) {
    selectedSets += upperSet;
  }
  if (lowerCaseCheckbox.checked) {
    selectedSets += lowerSet;
  }
  if (numberCheckbox.checked) {
    selectedSets += numberSet;
  }
  if (symbolCheckbox.checked) {
    selectedSets += symbolSet;
  }
  if (selectedSets === "") {
    alert("Please select at least one character set.");
    return;
  }
  while (password.length < totalChar) {
    password += getRandomData(selectedSets);
  }
  passwordBox.textContent = password.substring(0, totalChar);
}

generateBtn.addEventListener("click", generatePassword);

// Copy to clipboard functionality
copyPass.addEventListener("click", function () {
  navigator.clipboard
    .writeText(passwordBox.textContent)
    .then(() => {
      alert("Password copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});
