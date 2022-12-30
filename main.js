let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let firstname = id("first-name"),
  lastname = id("last-name"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  errorIcon = classes("error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(firstname, 0, "First Name cannot be empty");
  engine(lastname, 1, "Last Name cannot be empty");
  engine(email, 2, "Email cannot be empty");
  engine(password, 3, "Password cannot be empty");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    errorIcon[serial].style.opacity = "1";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    errorIcon[serial].style.opacity = "0";
  }
};
