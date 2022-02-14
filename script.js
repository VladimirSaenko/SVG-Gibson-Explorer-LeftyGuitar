
"use strict";

let mainGuitar = document.getElementById("mainGuitar");
let pad = document.getElementById("pad");
let griff = document.getElementById("griff");
let inputMain = document.getElementById("inputMain");
let inputPad = document.getElementById("inputPad");
let inputGriff = document.getElementById("inputGriff");
let mainButton = document.getElementById("mainbtn");

mainButton.addEventListener('click', function() {
    mainGuitar.style.fill = inputMain.value;
    pad.style.fill = inputPad.value;
    griff.style.fill = inputGriff.value;
});