// Constants
const question = document.getElementById("question");
const accept = document.getElementById("accept");
const reject = document.getElementById("reject");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

let count = 0;
let noLimit = 5;

// Action on no
no.addEventListener("click", function () {  
    count++;

    if (count >= noLimit) {
        rejection();
    }
    
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let yesWidth = yes.offsetWidth;
    let yesHeight = yes.offsetHeight;
    let noWidth = no.offsetWidth;
    let noHeight = no.offsetHeight;
    let scale = 1.75;

    // spacer.style.display = "none";

    if (yesWidth < windowWidth) {
        if (yesWidth * scale < windowWidth) {
            yes.style.width = `${yesWidth * scale}px`;
        } else {
            yes.style.width = `${windowWidth}px`;
        }
    }

    if (yesHeight < windowHeight) {
        if (yesHeight * scale < windowHeight) {
            yes.style.height = `${yesHeight * scale}px`;
        } else {
            yes.style.height = `${windowHeight}px`;
        }
    }

    no.style.position = "absolute";
    no.style.left = `${(windowWidth / 1.5 - noWidth) * Math.random()}px`;
    no.style.top = `${(windowHeight / 1.5 - noHeight) * Math.random()}px`;
});

// Action on yes
yes.addEventListener("click", function () {
    question.style.display = "none";
    accept.style.display = "flex";
});

// Too many no
const rejection = () => {
    question.style.display = "none";
    reject.style.display = "flex";
};