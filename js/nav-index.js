// INFO BUTTON
let infoButton = document.getElementById('nav--info');
let infoElem = document.getElementById('info');
let topButton = document.getElementById('nav--top');
let projectsButton = document.getElementById('nav--projects');
let sandboxButton = document.getElementById('nav--sandbox');

function revealInfo() {
    infoElem.classList.toggle("grid");
    infoElem.classList.toggle("hide-element");

    if(document.documentElement.scrollTop > 50 && infoElem.classList.contains("hide-element")) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
        
    }

    if(infoElem.classList.contains("hide-element")) {
        projectsButton.style.display = 'block';
        sandboxButton.style.display = 'block';
    } else {
        projectsButton.style.display = 'none';
        sandboxButton.style.display = 'none';
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


// MOBILE

let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
let effectsMessage = document.getElementById("params--effect-mobile");


if (deviceWidth <= 425) {
    effectsMessage.style.display = "inline";
} 

effectsSwitch.onchange = () => {
    effectsSwitch.checked ? addEffects() : removeEffects();
    
   if(!effectsSwitch.checked) {
        effectsMessage.style.display = "none";
    } else if (deviceWidth <= 425 && effectsSwitch.checked) {
        effectsMessage.style.display = "inline";
    }
}