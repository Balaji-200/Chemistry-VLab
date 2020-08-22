const game = document.getElementById("game");
// const level01 = document.getElementById('level-01');
var levelNo = 1;
function Next() {
  switch (levelNo) {
    case 1:
      if (checkLevel01()) {
        level02();
        nextLevel();
      }
      break;
    case 2:
      if (checkLevel02()) {
        level03();
        nextLevel();
      }
      break;
    case 3:
      if (checkLevel03()) {
        level04();
        nextLevel();
      }
      break;
    case 4:
      if (checkLevel04()) {
        nextLevel();
        level05();
      }
      break;
    case 5:
      if (checklevel05()) {
        nextLevel();
        level06();
      }
      break;
    case 6:
      if (checklevel06()) {
        nextLevel();
        level07();
      }
      break;
    case 7:
      if (checklevel07()) {
        nextLevel();
        level08();
      }
      break;
    case 8:
      if (checklevel08()) {
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
  levelNo < 8 ? levelNo++ : (location.href = "./experiment.html");
  location.href = `#${nextLevel.id}`;
  location.href = `#top`;
}
Level01();
