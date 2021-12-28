let cells = document.querySelectorAll(".cell");

let scaleSlider = document.getElementById("slider");

let buttonElem = document.getElementById("btn");

for (let cell of cells) {
    cell.style.transform = "scale(" + 5 * .1 + ")";
}

buttonElem.onclick = function () {
    document.body.classList.toggle('reverse-body');

    for (let cell of cells) {
        cell.classList.toggle('reverse-cell');
    }

}

slider.oninput = function () {

    for (let cell of cells) {
        cell.style.transform = "scale(" + slider.value * .1 + ")";
    }

}
