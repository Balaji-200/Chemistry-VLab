const loginForm = document.getElementById("loginForm");
const loader = document.getElementById("loader");
const form = document.getElementById("form");
const url = "https://chemistryvlab-server.herokuapp.com/users/login";
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.remove("d-block");
  form.classList.add("d-none");
  loader.classList.remove("d-none");
  loader.classList.add("d-block");
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const data = JSON.stringify({
    email: `${email}`.trim(),
    password: `${pass}`.trim(),
  });
  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((res) => {
      form.classList.remove("d-none");
      form.classList.add("d-block");
      loader.classList.remove("d-block");
      loader.classList.add("d-none");
      if (res.status == 401) {
        alert("Email or Password is incorrect");
        loginForm.reset();
        return;
      } else if (res.status === 500) {
        alert("Email or Password is incorrect");
        loginForm.reset();
        return;
      }
      return res.json();
    })
    .then((data) => {
      document.cookie = `tk=;expires=${new Date().getTime()};path=/;same-site=strict`;
      if (data) {
        let date = new Date();
        date.setTime(date.getTime() + 3 * 3600 * 1000);
        document.cookie = `tk = ${
          data["token"] || ""
        };expires=${date.toUTCString()};path=/;same-site=strict`;
        let cnf = confirm("Successfully Logged in!!!");
        if (cnf) window.location.href = "/Experiments/index.html";
        window.location.href = "/Experiments/index.html";
      }
    })
    .catch((err) => {
      alert("Something went wrong :( \n Try again later!");
      window.location.href = "/Chemistry-VLab/";
    });
});
