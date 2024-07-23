let password = localStorage.getItem("password");
let email = localStorage.getItem("email");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
const form = document.getElementById("form");

let img = document.getElementById("passone");
let a;
function pass() {
  if (a == 1) {
    passwordInput.type = "password";
    img.src = "././image/hide.png";
    a = 0;
  } else {
    passwordInput.type = "text";
    img.src = "././image/view.png";
    a = 1;
  }
}

let logout = document.getElementById(".log-in");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("logout");

  login_button();
});

let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
console.log(taskList);
taskList.forEach((element) => {
  console.log(element.email);
  console.log(element.password);
});

let validations_Data_Variable = true;

function login_button() {
  let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

  const email_check_value = taskList.some(
    (obj) => obj.email === emailInput.value
  );
  const password_check_veriable = taskList.some(
    (obj) => obj.password === passwordInput.value
  );
  if (email_check_value) {
    // alert("valid input");

    if (password_check_veriable) {
      window.location.href = "./profile.html";
    } else {
      alert("enter valid password");
    }
  } else {
    alert("Create Accout Go to sign up page and create account");
  }
}


// Arry.some Method Working Practice

// const arr = [
//   { email: "äz@gmail.com" },
//   { email: "äz@gmail13.com" }
// ];

// const emailToCheck = "äz@gmail.com";

// const result = arr.some(obj => obj.email === emailToCheck);

// console.log(result);