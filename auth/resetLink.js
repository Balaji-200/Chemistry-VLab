const linkForm = document.getElementById("resetLinkForm");
const email = document.getElementById("email");
const url = "https://chemistryvlab-server.herokuapp.com/users/resetPassword";
const loader = document.getElementById("loader");
const form = document.getElementById("form");

linkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.remove("d-block");
  form.classList.add("d-none");
  loader.classList.remove("d-none");
  loader.classList.add("d-block");
  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: `${email.value}`.trim(),
    }),
  })
    .then(async (res) => {
      loader.classList.remove("d-block");
      loader.classList.add("d-none");
      form.classList.remove("d-none");
      form.classList.add("d-block");
      let response = await res.json();
      if (res.status === 200 || res.status === 401) {
        alert(response["message"]);
        window.location.href = "/auth/login.html";
      } else {
        alert("Something went wrong :( \n Try again later!");
        window.location.href = "/";
      }
    })
    .catch((err) => {
      alert("Something went wrong :( \n Try again later!");
      window.location.href = "/";
    });
});
