const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
window.addEventListener("load", () => {
  let cookie = parseCookie(document.cookie)
  if (!cookie["tk"]) {
    alert("Please Login!");
    window.location.href = "/auth/login.html";
  }
});
const game = document.getElementById("game");
// const level01 = document.getElementById('level-01');
var levelNo = 1;
function Next() {
  switch (levelNo) {
    case 1:
      if (checklevel01()) {
        nextLevel();
        level02();
      }
      break;
    case 2:
      if (checklevel02()) {
        nextLevel();
        level03();
      }
      break;
    case 3:
      if (checklevel03()) {
        nextLevel();
        level04();
      }
      break;
    case 4:
      if (checklevel04()) {
        nextLevel();
        level05();
      }
      break;
    case 5:
      if (checklevel05()) {
        nextLevel();
      }
      break;
  }
}

function nextLevel() {
  const level = document.getElementById(`level-0${levelNo}`);
  const nextLevel = document.getElementById(`level-0${levelNo + 1}`);
  if (level.classList.contains("d-show")) {
    level.classList.remove("d-show");
    level.classList.add("d-none");
  } else {
    level.classList.remove("d-none");
    level.classList.add("d-show");
  }
  if (nextLevel != null) {
    if (nextLevel.classList.contains("d-show")) {
      nextLevel.classList.remove("d-show");
      nextLevel.classList.add("d-none");
    } else {
      nextLevel.classList.remove("d-none");
      nextLevel.classList.add("d-show");
    }
  }
  levelNo < 5 ? levelNo++ : (location.href = "./experiment.html");
  location.href = `#${nextLevel.id}`;
  location.href = `#top`;
}
level01();
