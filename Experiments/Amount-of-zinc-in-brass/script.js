//################################# GLOBAL DECLARATIONS ###################################################//
function clickListener(options, CSSclass) {
  var clicks = 0;
  for (let i = 0; i < options.children.length; i++) {
    options.children[i].addEventListener("click", () => {
      if (clicks == 0) options.children[i].classList.add(CSSclass);
      clicks++;
    });
  }
}
var durationRight = 0.7;
var durationLeft = 0.7;
const level04Options = [
  "It’s silvery-white and light-weight",
  "Excellent choice for making decorative pieces",
  "Yellow Gold color",
  "Used in electronic applications",
  "Used in Haber’s process as a catalyst",
  "High corrosion resistance",
  "Used in radiation protection",
  "Highly castable",
];
const level04WrongOptions = [
  "It’s silvery-white and light-weight",
  "Used in Haber’s process as a catalyst",
  "Used in radiation protection",
];
//################################## LEVEL-01 ###############################################//
function level01() {
  const options = document.getElementById("options-level-01");
  for (let i = 0; i <= options.children.length - 1; i++) {
    options.children[i].addEventListener("click", () => {
      if (options.children[i].classList.contains("wrong")) {
        options.children[i].classList.add("bg-danger");
        setTimeout(() => {
          alert("Wrong Answers!! , Try Again");
          window.location.href = "./landing-page.html";
        }, 100);
      } else {
        options.children[i].classList.add("bg-success");
      }
    });
  }
}
function checklevel01() {
  var correctAnswers = 0;
  const options = document.getElementById("options-level-01");
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("bg-success")) {
      correctAnswers++;
    }
  }
  if (correctAnswers == 7) {
    return true;
  } else {
    alert("Choose all the correct answers, Try Again");
    window.location.href = "./landing-page.html";
  }
}
//#################################################################################//

function level02() {
  const options = document.getElementById("options-level-02");
  clickListener(options, "option-clicked");
}
function checklevel02() {
  const options = document.getElementById("options-level-02");
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("option-clicked")) {
      if (options.children[i].children[0].getAttribute("alt") == "blue-pill") {
        return true;
      } else {
        alert("Wrong Answers!! , Try Again");
        window.location.href = "./landing-page.html";
      }
    }
  }
}
//#################################################################################//

function level03() {
  const options = document.getElementById("options-level-03");
  for (let i = 0; i <= options.children.length - 1; i++) {
    options.children[i].addEventListener("click", () => {
      if (options.children[i].classList.contains("wrong")) {
        options.children[i].classList.add("bg-danger");
        setTimeout(() => {
          alert("Wrong Answers!! , Try Again");
          window.location.href = "./landing-page.html";
        }, 100);
      } else {
        options.children[i].classList.add("bg-success");
      }
    });
  }
}
function checklevel03() {
  var correctAnswers = 0;
  const options = document.getElementById("options-level-03");
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("bg-success")) {
      correctAnswers++;
    }
  }
  if (correctAnswers == 4) {
    return true;
  } else {
    alert("Choose all the correct answers, Try Again");
    window.location.href = "./landing-page.html";
  }
}
//####################################################################################//
function level04() {
  const options = document.getElementById("options-level-04");
  const drop1 = document.getElementById("drop1");
  const drop4 = document.getElementById("drop4");
  drop1.style.animationDuration = "0.8s";
  drop4.style.animationDuration = "0.8s";
  level04Options.map((option, index) => {
    options.appendChild(createOption(option, index + 1));
  });
}

function createOption(option, id) {
  const div = document.createElement("div");
  div.classList.add(
    "option",
    "font-weight-bold",
    "m-1",
    "justify-content-center",
    "text-center",
    "p-1",
    "bg-purple",
    "align-items-center",
    "d-flex"
  );
  div.innerText = option;
  div.setAttribute("id", `drag${id}`);
  div.setAttribute("draggable", "true");
  div.setAttribute("ondragstart", "drag(event)");
  if (id % 2 == 0) {
    div.classList.add("slideRight");
    div.style.animationDuration = `${(durationLeft += 0.1)}s`;
  } else {
    div.classList.add("slideRight");
    div.style.animationDuration = `${(durationRight += 0.1)}s`;
  }
  return div;
}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  document.getElementById(ev.target.id).innerText = document.getElementById(
    data
  ).innerText;
}

function checklevel04() {
  var wrongAnswers = [];
  for (let i = 1; i <= 5; i++) {
    const drop = document.getElementById(`drop${i}`);
    for (let j = 1; j <= 5; j++) {
      if (j === i) continue;
      const nextDrop = document.getElementById(`drop${j}`);
      if (drop.innerText == nextDrop.innerText) {
        alert("No two Drop boxes can have same options");
        return false;
      }
    }
    wrongAnswers.push(level04WrongOptions.filter((el) => drop.innerText == el));
  }
  if (wrongAnswers.filter((el) => el.length > 0).length > 0) {
    alert("Wrong Answers , Try again");
    window.location.href = "./landing-page.html";
  } else {
    return true;
  }
}
//####################################################################################//
function level05() {
  const options = document.getElementById("options-level-05");
  clickListener(options, "bg-primary");
}
function checklevel05() {
  const options = document.getElementById("options-level-05");
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("bg-primary")) {
      if (
        options.children[i].children[0].innerHTML == "Complexometric titration"
      )
        return true;
      else {
        alert("Wrong Answer!!, Try Again");
        window.location.href = "./demo.html";
      }
    }
  }
}
//####################################################################################//
function level06() {
  const options = document.getElementById("options-level-06");
  clickListener(options, "option-clicked");
}
function checklevel06() {
  const options = document.getElementById("options-level-06");
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("option-clicked")) {
      if (options.children[i].getAttribute("alt") == "EDTA-2")
      return true;
      else {
        alert("Wrong Answer!!, Try Again");
        window.location.href = "./landing-page.html";
      }
    }
  }
}
//####################################################################################//
