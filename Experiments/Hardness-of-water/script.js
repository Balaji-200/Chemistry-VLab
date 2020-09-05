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
  document.getElementById(ev.target.id).innerHTML = document.getElementById(
    data
  ).innerHTML;
}

function createOption(option, id, addClass) {
  const div = document.createElement("div");
  div.classList.add(
    `${addClass}`,
    "font-weight-bold",
    "m-1",
    "justify-content-center",
    "text-center",
    "p-1",
    "bg-violet",
    "align-items-center",
    "d-flex"
  );
  div.innerHTML = option;
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

const level02options = [
  `Ca<sup>2+</sup>`,
  `Na<sup>+</sup>`,
  `OH<sup>-</sup>`,
  `HCO<sub>3</sub><sup>-</sup>`,
  `Fe<sup>2+</sup>`,
  `Cl<sup>-</sup>`,
  `K<sup>+</sup>`,
  `Mg<sup>2+</sup>`,
  `CO<sub>3</sub><sup>2-</sup>`,
  `NO<sub>3</sub><sup>-</sup>`,
  `SO<sub>4</sub><sup>2-</sup>`,
  `Mn<sup>2+</sup>`,
];
const level02wrongOptions = [
  `K<sup>+</sup>`,
  `Na<sup>+</sup>`,
  `OH<sup>-</sup>`,
];
const level03options = [
  "Lather does not form easily",
  "Large amount of sludge and scale formation in hot water boilers",
  "Not suitable for drinking",
  "Forms a lot of lather easily",
  "Not suitable in many industries like sugar industry, paper industry, laundry, pharmaceutical industry, etc.",
  "Cannot used in concrete making",
];
const level03wrongOptions = ["Forms a lot of lather easily"];
//##############################################################################################//
function level01() {
  const options = document.getElementById("level-01-options");
  clickListener(options, "option-clicked-background");
}
function checklevel01() {
  const options = document.getElementById("level-01-options");
  for (let i = 0; i < options.children.length; i++) {
    if (options.children[i].classList.contains("option-clicked-background"))
      if (options.children[i].innerText == "Origin of Hardness of water") {
        return true;
      } else {
        alert("Wrong Answer, Try Again!!");
        window.location.href = "./landing-page.html";
      }
  }
}
//##############################################################################################//
function level02() {
  const options = document.getElementById("level-02-options");
  const drop1 = document.getElementById("drop-level-02-1");
  const drop6 = document.getElementById("drop-level-02-6");
  drop1.style.animationDuration = "0.8s";
  drop6.style.animationDuration = "0.8s";
  level02options.map((option, index) => {
    options.appendChild(
      createOption(option, `-level-02-${index + 1}`, "level-02-option")
    );
  });
}
function checklevel02() {
  var wrongAnswers = [];
  for (let i = 1; i <= 6; i++) {
    const drop = document.getElementById(`drop-level-02-${i}`);
    for (let j = 1; j <= 6; j++) {
      if (j === i) continue;
      const nextDrop = document.getElementById(`drop-level-02-${j}`);
      if (drop.innerHTML == nextDrop.innerHTML) {
        alert("No two Drop boxes can have same options");
        return false;
      }
    }
    wrongAnswers.push(level02wrongOptions.filter((el) => drop.innerHTML == el));
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
  const options = document.getElementById("level-03-options");
  const drop1 = document.getElementById("drop-level-03-1");
  const drop5 = document.getElementById("drop-level-03-5");
  drop1.style.animationDuration = "0.8s";
  drop5.style.animationDuration = "0.8s";
  level03options.map((option, index) => {
    options.appendChild(
      createOption(option, `-level-03-${index + 1}`, "level-03-option")
    );
  });
}
function checklevel03() {
  var wrongAnswers = [];
  for (let i = 1; i <= 5; i++) {
    const drop = document.getElementById(`drop-level-03-${i}`);
    for (let j = 1; j <= 5; j++) {
      if (j === i) continue;
      const nextDrop = document.getElementById(`drop-level-03-${j}`);
      if (drop.innerHTML == nextDrop.innerHTML) {
        alert("No two Drop boxes can have same options");
        return false;
      }
    }
    wrongAnswers.push(level03wrongOptions.filter((el) => drop.innerHTML == el));
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
function checklevel04() {
  const option1 = document.getElementById("level-04-01");
  const option2 = document.getElementById("level-04-02");
  if (option1.value == "" || option2.value == "")
    alert("Please label the images in the respective input boxes.");
  if (
    (option1.value.toLowerCase() == "soft water sample" ||
      option1.value.toLowerCase() == "soft water") &&
    (option2.value.toLowerCase() == "hard water sample" ||
      option2.value.toLowerCase() == "hard water")
  ) {
    return true;
  } else {
    alert("Wrong Answer!! , Try Again.");
    window.location.href = "./landing-page.html";
  }
}
//##############################################################################################//
function level05() {
  var clicks = 0;
  const options = document.getElementById("level-05-options");
  for (let i = 0; i < options.children.length; i++) {
    options.children[i].addEventListener("click", () => {
      if (clicks <= 1)
        options.children[i].classList.add("option-clicked-opacity");
      clicks++;
    });
  }
}
function checklevel05() {
  var correctAnswers = 0;
  const options = document.getElementById("level-05-options");
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("option-clicked-opacity")) {
      if (options.children[i].getAttribute("alt") == "level-05-01") {
        correctAnswers++;
        continue;
      }
      if (options.children[i].getAttribute("alt") == "level-05-03") {
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
function level06() {
  const options = document.getElementById("level-06-options");
  clickListener(options, "option-clicked-opacity");
}
function checklevel06() {
  const options = document.getElementById("level-06-options");
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("option-clicked-opacity")) {
      if (options.children[i].children[0].getAttribute("alt") == "red-pill") {
        return true;
      } else {
        alert("Wrong Answers!! , Try Again");
        window.location.href = "./landing-page.html";
      }
    }
  }
}
//##############################################################################################//
function level07() {
  const options = document.getElementById("level-07-options");
  clickListener(options, "option-clicked-opacity");
}
function checklevel07() {
  const options = document.getElementById("level-07-options");
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("option-clicked-opacity")) {
      if (options.children[i].getAttribute("alt") == "EDTA-2") return true;
      else {
        alert("Wrong Answer!!, Try Again");
        window.location.href = "./landing-page.html";
      }
    }
  }
}
//##############################################################################################//
function level08() {
  const slider = document.getElementById("slider");
  const sliderVal = document.getElementById("slider-val");
  slider.addEventListener("change", () => {
    sliderVal.innerText = slider.value;
  });
}
function checklevel08() {
  const slider = document.getElementById("slider");
  if (slider.value == 10) return true;
  else {
    alert("Wrong answer!!! , Try Again.");
    window.location.href = "./landing-page.html";
  }
}
//#############################################################################################//
function level09() {
  const options = document.getElementById("level-09-options");
  clickListener(options, "option-clicked-opacity");
}
function checklevel09() {
  const options = document.getElementById("level-09-options");
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("option-clicked-opacity")) {
      if (options.children[i].getAttribute("alt") == "level-09-1") return true;
      else {
        alert("Wrong Answer!!, Try Again");
        window.location.href = "./landing-page.html";
      }
    }
  }
}
//#############################################################################################//
