const url = "https://chemistryvlab-server.herokuapp.com/users/resetPassword";
const loader = document.getElementById("loader");
const form = document.getElementById("form");
const resetForm = document.getElementById("resetForm");
const password = document.getElementById("password");
const cnfPassword = document.getElementById("cnfPassword");
window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has("token"))
    fetch(url + `?token=${params.get("token")}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          loader.classList.remove("d-block");
          loader.classList.add("d-none");
          form.classList.remove("d-none");
          form.classList.add("d-block");
          res.json().then((response) => (globalThis.user = response["user"]));
        } else {
          alert("Invalid Token \n Try Again!!");
          window.location.href = "/auth/login.html";
        }
      })
      .catch((err) => {
        alert("Invalid Token \n Try Again!!");
        window.location.href = "/auth/login.html";
      });
  else {
    alert("Invalid Token \n Try Again!!");
    window.location.href = "/auth/login.html";
  }
});

resetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let pass = `${password.value}`.trim();
  let cpass = `${cnfPassword.value}`.trim();
  if (pass !== cpass) {
    alert("Password and Confirm password do not match");
    resetForm.reset();
    return;
  } else {
    form.classList.remove("d-block");
    form.classList.add("d-none");
    loader.classList.remove("d-none");
    loader.classList.add("d-block");
    fetch(url + "/reset", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: globalThis.user.email,
        username: globalThis.user.username,
        password: pass,
      }),
    })
      .then(async (res) => {
        let response = await res.json();
        if (res.status === 200) {
          let cnf = confirm(response["message"]);
          if (cnf) window.location.href = "/auth/login.html";
          else window.location.href = "/";
        } else {
          alert("Something went wrong :( \n Try again later!");
          window.location.href = "/";
        }
      })
      .catch((err) => {
        alert("Something went wrong :( \n Try again later!");
        window.location.href = "/";
      });
  }
});
