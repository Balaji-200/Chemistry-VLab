//################################### GLOBAL DECLARATIONS ######################################//
function clickListener(options, CSSclass) {
  var clicks = 0;
  for (let i = 0; i < options.children.length; i++) {
    options.children[i].addEventListener("click", () => {
      if (clicks == 0) options.children[i].classList.add(CSSclass);
      clicks++;
    });
  }
}
const level02options = [
  "Silver nitrate titration with chromate indicator ( Mohr’s method)",
  "Acid base titration using phenolphthalein indicator",
  "Silver colorimetry",
  "Potentiometric titration with silver nitrate",
  "Complexometric titration with EDTA using EBT indicator",
  "Mercury(II) nitrate titration with diphenylcarbazone indicator",
];
const level02wrongOptions = [
  "Acid base titration using phenolphthalein indicator",
  "Complexometric titration with EDTA using EBT indicator",
];
const level03options = [
  "At the endpoint, all the Cl− ions have precipitated. The slightest excess of Ag+ precipitates with the chromate indicator",
  "If addition of Ag+ is continued past the endpoint, further silver chromate precipitate is formed",
  "Before the addition of any silver nitrate the chromate indicator gives the clear solution",
  "Before the titration endpoint, addition of Ag+ ions leads to formation of silver chloride precipitate",
];

var durationRight = 0.7;
var durationLeft = 0.7;

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

//##############################################################################################//
function level01() {
  const options = document.getElementById("options-level-01");
  for (let i = 0; i < options.children.length; i++) {
    options.children[i].addEventListener("click", () => {
      options.children[i].classList.add("bg-warning");
    });
  }
}
function checklevel01() {
  var correctAnswers = 0;
  const options = document.getElementById("options-level-01");
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("bg-warning")) {
      if (!options.children[i].classList.contains("wrong")) {
        correctAnswers++;
      }else{
        correctAnswers--;
      }
    }
  }
  if (correctAnswers == 4) return true;
  else {
    alert("Wrong Answer!!, Try Again");
    window.location.href = "./landing-page.html";
  }
}
//##############################################################################################//
function level02() {
  const options = document.getElementById("options-level-02");
  const drop1 = document.getElementById("drop-level-02-1");
  const drop4 = document.getElementById("drop-level-02-4");
  drop1.style.animationDuration = "0.8s";
  drop4.style.animationDuration = "0.8s";
  level02options.map((option, index) => {
    options.appendChild(createOption(option, `-level-02-${index + 1}`));
  });
}

function checklevel02() {
  var wrongAnswers = [];
  for (let i = 1; i <= 4; i++) {
    const drop = document.getElementById(`drop-level-02-${i}`);
    for (let j = 1; j <= 4; j++) {
      if (j === i) continue;
      const nextDrop = document.getElementById(`drop-level-02-${j}`);
      if (drop.innerText == nextDrop.innerText) {
        alert("No two Drop boxes can have same options");
        return false;
      }
    }
    wrongAnswers.push(level02wrongOptions.filter((el) => drop.innerText == el));
  }
  if (wrongAnswers.filter((el) => el.length > 0).length > 0) {
    alert("Wrong Answers , Try again");
    window.location.href = "./landing-page.html";
  } else {
    durationRight = 0.7;
    durationLeft = 0.7;
    return true;
  }
}
//##############################################################################################//

function level03() {
  const options = document.getElementById("options-level-03");
  const drop1 = document.getElementById("drop-level-03-1");
  const drop4 = document.getElementById("drop-level-03-4");
  drop1.style.animationDuration = "0.8s";
  drop4.style.animationDuration = "0.8s";
  level03options.map((option, index) => {
    options.appendChild(createOption(option, `-level-03-${index + 1}`));
  });
}

function checklevel03() {
  for (let i = 1; i <= 4; i++) {
    const drop = document.getElementById(`drop-level-03-${i}`);
    for (let j = 1; j <= 4; j++) {
      if (j === i) continue;
      const nextDrop = document.getElementById(`drop-level-03-${j}`);
      if (drop.innerText == nextDrop.innerText) {
        alert("No two Drop boxes can have same options");
        return;
      }
    }
  }
  const drop1 = document.getElementById(`drop-level-03-1`);
  const drop2 = document.getElementById(`drop-level-03-2`);
  const drop3 = document.getElementById(`drop-level-03-3`);
  const drop4 = document.getElementById(`drop-level-03-4`);
  if (
    drop1.innerText == level03options[2] &&
    drop2.innerText == level03options[3] &&
    drop3.innerText == level03options[0] &&
    drop4.innerText == level03options[1]
  ) {
    return true;
  } else {
    alert("Wrong Answer!! , Try again.");
    window.location.href = "./landing-page.html";
  }
}

//##############################################################################################//
function level04() {
  const options = document.getElementById("options-level-04");
  clickListener(options, "bg-warning");
}
function checklevel04() {
  const options = document.getElementById("options-level-04");
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("bg-warning")) {
      if (options.children[i].innerText == "Increases") {
        return true;
      } else {
        alert("Wrong Answers!! , Try Again");
        window.location.href = "./demo.html";
      }
    }
  }
}
//##############################################################################################//

function level05() {
  var clicks = 0;
  const options = document.getElementById("options-level-05");
  for (let i = 0; i < options.children.length; i++) {
    options.children[i].addEventListener("click", () => {
      if (clicks <= 1) options.children[i].classList.add("option-clicked");
      clicks++;
    });
  }
}
function checklevel05() {
  var correctAnswers = 0;
  const options = document.getElementById("options-level-05");
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("option-clicked")) {
      if (options.children[i].getAttribute("alt") == "galvanic_corrosion") {
        correctAnswers++;
        continue;
      }
      if (options.children[i].getAttribute("alt") == "pitting_corrosion") {
        correctAnswers++;
        continue;
      }
    }
  }
  if (correctAnswers == 2) {
    return true;
  } else {
    alert("Wrong Answers!! , Try Again");
    window.location.href = "./landing-page.html";
  }
}

//##############################################################################################//
