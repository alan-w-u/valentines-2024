// Constants
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

// Action on no
no.addEventListener("click", function () {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let yesWidth = yes.offsetWidth;
    let yesHeight = yes.offsetHeight;
    let noWidth = no.offsetWidth;
    let noHeight = no.offsetHeight;
    let scale = 1.5;

    // spacer.style.display = "none";

    if (yesWidth < windowWidth) {
        if (yesWidth * scale < windowWidth) {
            yes.style.width = `${yesWidth * scale}px`;
        } else {
            yes.style.width = `${windowWidth}px`;
        }
    }

    if (yesHeight < windowHeight / 2.1) {
        if (yesHeight * scale < windowHeight / 2.1) {
            yes.style.height = `${yesHeight * scale}px`;
        } else {
            yes.style.height = `${windowHeight / 2.1}px`;
        }
    }

    no.style.position = "absolute";
    no.style.left = `${(windowWidth / 1.35 - noWidth) * Math.random()}px`;
    no.style.top = `${(windowHeight / 1.35 - noHeight) * Math.random()}px`;
});

// Action on yes
yes.addEventListener("click", function () {
    question.style.display = "none";
    answer.style.display = "flex";
});