let palette = ['#88B9B4', '#AACCDF', '#DCE3FA', '#0277C7', '#FF4901'];

let elements = document.querySelectorAll('.effect');

elements.forEach((element) => {

  let content = element.textContent;
  let words = content.split(' ');

  let wordWrapper = '';

  wordWrapper = words.map(word => `<div class="effect--div">${word}</div>`).join(' ');

  element.innerHTML = wordWrapper;

  let divs = document.querySelectorAll('.effect--div')

  divs.forEach((div) => {
    let text = div.innerText;
    let spanWrapper = '';

    for (let i = 0; i < text.length; i++) {
      spanWrapper += `<span class="effect--span">${text.charAt(i)}</span>`;
      div.innerHTML = spanWrapper;
    }

  })

})

let spans = document.querySelectorAll('.effect--span');
let spanElements = Array.from(spans);

// EFFECTS

function addEffects() {
    document.onmousemove = function (e) {
  
        spanElements.forEach((spanElement, index) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        
        let centerX = window.innerWidth / 2;
        let centerY = window.innerHeight /2;
        
        let distFromCenter = distance(centerX, centerY, mouseX, mouseY)
        
        let maxDist = distance(centerX, centerY, window.innerWidth, window.innerHeight)
        
        let mappedEffect = map(distFromCenter, 0, maxDist, 30, 0);
          
        let mappedRotation = map(distFromCenter, 0, maxDist, Math.random() * 90 - 45, 0);

         
        spanElement.style.top = mappedEffect * -Math.sin((index * .01) * 20 * Math.PI) + "px";
        spanElement.style.transform = `rotate(${Math.random() * mappedRotation}deg)`;
          
      
        })
      }
}

function removeEffects() {

    document.onmousemove = function (e) {
    spanElements.forEach((spanElement) => {
        spanElement.style.top = 0;

        // I kinda like how the letters keep the rotation when they go back to their normal position!
        // spanElement.style.transform = "rotate(0deg)";
})
    }
}

let effectsSwitch = document.getElementById("params--effect");

effectsSwitch.checked ? addEffects() : removeEffects();

effectsSwitch.onchange = () => {
    effectsSwitch.checked ? addEffects() : removeEffects();
};





// COLORS
function addColors() {
    spanElements.forEach((spanElement) => {
      
    spanElement.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)]
      
      
      
    })
    
    }
    
    function removeColors() {
        spanElements.forEach((spanElement) => {
        spanElement.style.backgroundColor = "transparent";
    })
    }
    
    
    let colorsSwitch = document.getElementById("params--colors");
    
    colorsSwitch.checked ? addColors() : removeColors();
    
    colorsSwitch.onchange = () => {
        colorsSwitch.checked ? addColors() : removeColors();
    };






// NUMBERS

function addNumbers() {
    spanElements.forEach((spanElement, index) => {
        spanElement.innerHTML += `<sub class="span--index">${index + 1}</sub>`;
    })
    document.documentElement.style.setProperty("--about-max-width", "100%");
}

function removeNumbers() {

        let spanIndices = document.querySelectorAll(".span--index")
        for(let spanIndex of spanIndices) {
            spanIndex.style.display = "none";
        }
        document.documentElement.style.setProperty("--about-max-width", "900px");
}

let numbersSwitch = document.getElementById("params--numbers");
    
    numbersSwitch.checked ? addNumbers() : removeNumbers();
    
    numbersSwitch.onchange = () => {
        numbersSwitch.checked ? addNumbers() : removeNumbers();
    };



function map(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function distance(x1,y1,x2,y2){
  return Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
}



