let email_input = document.getElementById("email");
let passwordInput = document.getElementById("password");
let confirmPassword = document.getElementById("c-password");
let submit_btn = document.getElementById("submit");
let span = document.querySelectorAll("span");

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

submit_btn.addEventListener("click", (e) => {
  if (
    !emailPattern.test(email_input.value) ||
    !passwordPattern.test(passwordInput.value) ||
    passwordInput.value !== confirmPassword.value
  ) {
    e.preventDefault();
    span[0].classList.add("error");
  } else {
    span[0].classList.remove("error");
    e.defaultPrevented();
  }
});
