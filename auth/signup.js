function initialize() {
  var input = document.getElementById("nameOfInst");
  var options = {
    componentRestrictions: { country: "in" },
  };
  new google.maps.places.Autocomplete(input, options);
}

const signupForm = document.getElementById("signupForm");
const loader = document.getElementById("loader");
const form = document.getElementById("form");
const url = "https://chemistryvlab-server.herokuapp.com/users/signup";

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const nameOfInst = document.getElementById("nameOfInst").value;
  const password = document.getElementById("password");
  const cnfPassword = document.getElementById("cnfPassword");
  if (cnfPassword.value !== password.value) {
    password.value = "";
    cnfPassword.value = "";
    alert("Password and Confirm Password do not match.");
    return;
  }
  form.classList.remove("d-block");
  form.classList.add("d-none");
  loader.classList.remove("d-none");
  loader.classList.add("d-block");
  let data = JSON.stringify({
    username: `${username}`.trim(),
    email: `${email}`.trim(),
    nameOfInst: `${nameOfInst}`.trim(),
    password: `${password.value}`.trim(),
  });
  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  }).then(async (res) => {
    let data = await res.json();
    loader.classList.remove("d-block");
    loader.classList.add("d-none");
    form.classList.remove("d-none");
    form.classList.add("d-block");
    if (data.success) cnf(data.message);
    else {
      alert("Something went wrong :( \n Try again later.");
      window.location.href = "/Chemistry-VLab/";
    }
  });
});

const cnf = (str) => {
  let cnf = confirm(str);
  if (cnf) window.location.href = "/auth/login.html";
  else window.location.href = "/Chemistry-VLab/";
};
