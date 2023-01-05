let email = document.getElementById("email");
email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid e-mail!");
  } 
  else if (email.validity.tooShort){
    email.setCustomValidity("This e-mail is too short to be real!");
  }
  else {
    email.setCustomValidity("");
  }
});

let zip = document.getElementById("zip");
zip.addEventListener("input", () => {
  if (zip.validity.typeMismatch) {
    zip.setCustomValidity("Please enter a valid zip code!");
  }
  else if (zip.validity.rangeUnderflow || zip.validity.rangeOverflow) {
    zip.setCustomValidity("The zip code must contain 5 numbers");
  }
  else {
    zip.setCustomValidity("");
  }
})

let pass = document.getElementById("pass");
pass.addEventListener("input", () => {
  if (pass.validity.patternMismatch) {
    pass.setCustomValidity("The password must contain minimum 8 characters, at least one uppercase letter, one lowercase letter and one number.");
  }
  else {
    pass.setCustomValidity("");
  }
})

let confirmPass = document.getElementById("confirm-pass");
confirmPass.addEventListener("input", () => {
  if (!(confirmPass.value == pass.value)) {
    confirmPass.setCustomValidity("Passwords do not match");
  }
  else {
    confirmPass.setCustomValidity("");
  }
})