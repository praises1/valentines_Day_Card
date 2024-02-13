const titleEl = document.getElementById("title-el");
//const subEl = document.getElementById("sub-el");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const catImg = document.getElementById("catImg");
//const buttons = document.getElementById("buttons");

const maxImages = 6;
let play = true;
let noCount = 0;

function yes() {
  //console.log("k");
  titleEl.textContent = "YAY ILYSM ❤🥰!";

  changeImage("yes");
  //hide button
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function resizeYesBtn() {
  const computedStyle = window.getComputedStyle(yesBtn);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.5;

  yesBtn.style.fontSize = `${newFontSize}px`;
}

function no() {
  //console.log("b");
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, maxImages);
    changeImage(imageIndex);
    resizeYesBtn();
    updateNoBtnText();
    if (noCount === maxImages) {
      play = false;
      //hide button
      noBtn.style.display = "none";
    }
  }
  titleEl.textContent = "WILL YOU BE MY VALENTINE!! :";
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Baby please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "BRB I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function updateNoBtnText() {
  noBtn.textContent = generateMessage(noCount);
}
