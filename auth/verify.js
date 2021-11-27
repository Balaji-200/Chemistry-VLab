const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

const url = "https://chemistryvlab-server.herokuapp.com/users/";
const experiments = document.getElementById("experiments");
const loader = document.getElementById("loader");

window.onload = () => {
  if (!document.cookie) {
    let cnf = confirm("Please login!!");
    if (cnf) window.location.href = "/auth/login.html";
    else window.location.href = "/";
    return;
  }
  let cook = parseCookie(document.cookie);

  fetch(url + "verify", {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cook["tk"]}`,
    },
  })
    .then((res) => {
      if (res.status == 401) {
        let cnf = confirm("Please login!!");
        if (cnf) window.location.href = "/auth/login.html";
        else window.location.href = "/";
        return;
      }
      return res.json();
    })
    .then((data) => {
      experiments.classList.remove("d-none");
      experiments.classList.add("d-block");
      loader.classList.remove("d-block");
      loader.classList.add("d-none");
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(document.createElement("h3")).innerText =
        data["username"];
      userInfo.appendChild(document.createElement("p")).innerText =
        data["email"];
      if (data["isAdmin"]) {
        let downloadButton = document.createElement("button");
        downloadButton.textContent = "Download";
        downloadButton.classList.add("btn", "btn-success");
        downloadButton.addEventListener("click", () =>
          download(url, "list.csv")
        );
        userInfo.appendChild(downloadButton);
      }
    });
};

const logout = () => {
  if (!document.cookie) {
    window.location.href = "";
    return;
  }
  experiments.classList.remove("d-block");
  experiments.classList.add("d-none");
  loader.classList.remove("d-none");
  loader.classList.add("d-block");
  let cook = parseCookie(document.cookie);
  fetch(url + "logout", {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cook["tk"]}`,
    },
  })
    .then((res) => {
      document.cookie = `tk=;expires=${new Date().getTime()};path=/;same-site=strict`;
      window.location.href = "/";
    })
    .catch((err) => {
      alert("Something went wrong :( \n Try again!");
      window.location.href = "/";
    });
};

const download = (url, filename) => {
  let cookie = parseCookie(document.cookie);
  fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${cookie["tk"]}`,
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      return;
    })
    .catch(console.error);
};
