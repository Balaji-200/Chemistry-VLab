const level01Options = [
  "Solid waste including plastics, metal, wood etc",
  "Microbial waste",
  "Soaps and Detergents",
  "Sewage",
  "Oil spills",
  "Bio-Medical waste",
  "Nuclear waste",
  "Chemicals including acids, drugs, dyes paints etc.",
  "Storm generated waste",
  "Organic waste including food, plant waste etc.",
];
var durationRight = 0.7;
var durationLeft = 0.7;
//#######################################################################################//
function Level01() {
  const options = document.getElementById("options");
  const drop1 = document.getElementById("drop1");
  const drop4 = document.getElementById("drop4");
  drop1.style.animationDuration = "0.8s";
  drop4.style.animationDuration = "0.8s";
  level01Options.map((option, index) => {
    options.appendChild(createOption(option, index + 1));
  });
}

function createOption(option, id) {
  const div = document.createElement("div");
  div.classList.add(
    "option",
    "font-weight-light",
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

function checkLevel01() {
  for (let i = 1; i <= 4; i++) {
    const drop = document.getElementById(`drop${i}`);
    for (let j = 1; j <= 4; j++) {
      if (j === i) continue;
      const nextDrop = document.getElementById(`drop${j}`);
      if (drop.innerText == nextDrop.innerText) {
        alert("No two Drop boxes can have same options");
        return false;
      }
    }
  }
  return true;
}

//#######################################################################################//

function level02() {
  var clicks = 0;
  const options = document.getElementById("Options-02");
  for (let i = 0; i <= 3; i++) {
    options.children[i].addEventListener("click", () => {
      if (clicks < 2)
        if (!options.children[i].classList.contains("option-clicked"))
          options.children[i].classList.add("option-clicked");
      clicks++;
    });
  }
}

function checkLevel02() {
  const options = document.getElementById("Options-02");
  for (let i = 0; i <= 3; i++) {
    if (options.children[i].classList.contains("option-clicked"))
      if (options.children[i].id == "wrong") {
        alert("Wrong Answer");
        location.href = "./landing-page.html";
      }
  }
  return true;
}

//#######################################################################################//

function level03() {
  var clicked = false;
  const options = document.getElementById("Options-03");
  for (let i = 0; i <= 1; i++) {
    options.children[i].addEventListener("click", () => {
      if (clicked == false)
        if (!options.children[i].classList.contains("option-clicked")) {
          options.children[i].classList.add("option-clicked");
          clicked = true;
        }
    });
  }
}

function checkLevel03() {
  const options = document.getElementById("Options-03");
  for (let i = 0; i <= 1; i++) {
    if (options.children[i].classList.contains("option-clicked")) {
      if (options.children[i].id == "correct") return true;
      else {
        alert("Wrong Answer");
        location.href = "./landing-page.html";
      }
    }
  }
}
//#######################################################################################//

function level04() {
  const slider = document.getElementById("slider");
  const sliderBubble = document.getElementById("slider-bubble");
  slider.addEventListener("input", () => {
    sliderBubble.innerText = slider.value;
  });
}
function checkLevel04() {
  const sliderBubble = document.getElementById("slider-bubble");
  if (parseInt(sliderBubble.innerText) < 7) return true;
  else {
    alert("Wrong Answer!");
    location.href = "./landing-page.html";
  }
}

//#######################################################################################//

function level05() {
  const options = document.getElementById("Options-05");
  const next = document.getElementById("next");
  $(document).ready(() => {
    if (next.classList.contains("d-show")) {
      next.classList.add("d-none");
      next.classList.remove("d-show");
    }
  });
  for (let i = 0; i <= options.children.length - 1; i++) {
    options.children[i].addEventListener("click", () => {
      options.children[i].classList.add("level-05-option-clicked");
    });
  }
}

function checkPart01() {
  const options = document.getElementById("Options-05");
  var count = 0;
  for (let i = 0; i <= options.children.length - 1; i++) {
    if (options.children[i].classList.contains("level-05-option-clicked")) {
      const attr = options.children[i].getAttribute("alt");
      if (attr == "KMnO4" || attr == "HNO3" || attr == "K2Cr2O7") count++;
      else count--;
    }
  }
  if (count == 3) {
    $("#level-05-part2").modal({ keyboard: false, backdrop: "static" });
    $("#level-05-part2").modal("toggle");
  } else {
    alert("Wrong Try again!");
    location.href = "./landing-page.html";
  }
}
function checklevel05() {
  const checked = document.getElementById("level-05-part2-option-3");
  if (!checked.checked) {
    alert("Wrong Answer!!");
    location.href = "./landing-page.html";
    return false;
  }
  $("#level-05-part2").modal("toggle");
  return true;
}

//###################################################################################//

function level06() {
  var clicks = 0;
  const options = document.getElementById("level06-options");
  const next = document.getElementById("next");
  $(document).ready(() => {
    if (next.classList.contains("d-none")) {
      next.classList.add("d-show");
      next.classList.remove("d-none");
    }
  });
  for (let i = 0; i <= options.children.length-1; i++) {
    options.children[i].addEventListener("click", () => {
      if (clicks == 0)
        options.children[i].classList.add("level-05-option-clicked");
      clicks++;
    });
  }
}
function checklevel06() {
  const options = document.getElementById("level06-options");
  const reason = document.getElementById("reason");
  for (let i = 0; i <= options.children.length; i++) {
    if (options.children[i].classList.contains("level-05-option-clicked"))
      if (options.children[i].getAttribute("alt") == "HNO3") {
        if (reason.value == "") alert("Please give reason in few words");
        else return true;
      } else {
        alert("Wrong Answer, Try Again!!");
        location.href = "./landing-page.html";
      }
  }
}

//#####################################################################################//

function level07() {
  const optionsPart1 = document.getElementById("level07-part01-options");
  const optionsPart2 = document.getElementById("level07-part02-options");
  clickListener(optionsPart1);
  clickListener(optionsPart2);
}
function clickListener(options) {
  var clicks = 0;
  for (let i = 0; i < options.children.length ; i++) {
    options.children[i].addEventListener("click", () => {
      if (clicks == 0)
        options.children[i].classList.add("level-05-option-clicked");
      clicks++;
    });
  }
}
function checklevel07() {
  var correctAnswers = 0;
  const optionsPart2 = document.getElementById("level07-part02-options");
  const optionsPart1 = document.getElementById("level07-part01-options");
  for (let i = 0; i <= optionsPart2.children.length - 1; i++) {
    if (optionsPart2.children[i].classList.contains("level-05-option-clicked"))
      if (optionsPart2.children[i].getAttribute("alt") == "HgSO4") {
        correctAnswers++;
      }
  }
  for (let i = 0; i <= optionsPart1.children.length - 1; i++) {
    if (optionsPart1.children[i].classList.contains("level-05-option-clicked"))
      if (optionsPart1.children[i].classList.contains("correct")) {
        correctAnswers++;
      }
  }
  if (correctAnswers == 2) return true;
  else {
    alert("Wrong Answer, Try Again!!");
    window.location.href = "./landing-page.html";
  }
}

//###########################################################################################////
