// INFO BUTTON
let infoButton = document.getElementById('nav--info');
let infoElem = document.getElementById('info');
let topButton = document.getElementById('nav--top');

function revealInfo() {
    infoElem.classList.toggle("grid");
    infoElem.classList.toggle("hide-element");

    if(document.documentElement.scrollTop > 50 && infoElem.classList.contains("hide-element")) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
        console.log('hi')
    }
}

infoButton.addEventListener("click", revealInfo);

// BACK TO TOP
window.onscroll = () => {

        if (document.documentElement.scrollTop > 50 && infoElem.classList.contains("hide-element")) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

}