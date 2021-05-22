/* this code isn't refactored yet please forgive me :) */

/* GLOBAL STYLES */

let wCells = document.querySelectorAll(".letter.w .cell");

let hCells = document.querySelectorAll(".letter.h .cell");

let iCells = document.querySelectorAll(".letter.i .cell");

let tCells = document.querySelectorAll(".letter.t .cell");

let eCells = document.querySelectorAll(".letter.e .cell");

let cCells = document.querySelectorAll(".letter.c .cell");

let aCells = document.querySelectorAll(".letter.a .cell");

let pCells = document.querySelectorAll(".letter.p .cell");

let lCells = document.querySelectorAll(".letter.l .cell");

// let randomScale = ((Math.random() * 10 - 5) + 7)

let scaleSlider = document.getElementById("slider");

let buttonElem = document.getElementById("btn");

let normalBody = document.getElementById("normal");

/* LOCAL STYLES */

function reverseColors(){
    if(normalBody.classList == "reverse-body"){
        normalBody.classList.remove("reverse-body");
        for(let i = 0; i < wCells.length; i++){
            wCells[i].style.backgroundColor = "#ec4513";
            }
        
        for(let i = 0; i < hCells.length; i++){
            hCells[i].style.backgroundColor = "#ec4513";
            }

        for(let i = 0; i < iCells.length; i++){
            iCells[i].style.backgroundColor = "#ec4513";
            }

        for(let i = 0; i < tCells.length; i++){
            tCells[i].style.backgroundColor = "#ec4513";
            }

        for(let i = 0; i < eCells.length; i++){
            eCells[i].style.backgroundColor = "#ec4513";
            }
    
        for(let i = 0; i < cCells.length; i++){
            cCells[i].style.backgroundColor = "#ec4513";
            }

        for(let i = 0; i < aCells.length; i++){
            aCells[i].style.backgroundColor = "#ec4513";
            }

        for(let i = 0; i < pCells.length; i++){
            pCells[i].style.backgroundColor = "#ec4513";
            }

        for(let i = 0; i < lCells.length; i++){
            lCells[i].style.backgroundColor = "#ec4513";
            }
    }

    else if(normalBody.classList !== "reverse-body"){
        normalBody.classList.add("reverse-body");
        for(let i = 0; i < wCells.length; i++){
            wCells[i].style.backgroundColor = "#cecac5";
            }
            
        for(let i = 0; i < hCells.length; i++){
            hCells[i].style.backgroundColor = "#cecac5";
            }

        for(let i = 0; i < iCells.length; i++){
            iCells[i].style.backgroundColor = "#cecac5";
            }

        for(let i = 0; i < tCells.length; i++){
            tCells[i].style.backgroundColor = "#cecac5";
            }

        for(let i = 0; i < eCells.length; i++){
            eCells[i].style.backgroundColor = "#cecac5";
            }

        for(let i = 0; i < cCells.length; i++){
            cCells[i].style.backgroundColor = "#cecac5";
            }

        for(let i = 0; i < aCells.length; i++){
            aCells[i].style.backgroundColor = "#cecac5";
            }

        for(let i = 0; i < pCells.length; i++){
            pCells[i].style.backgroundColor = "#cecac5";
            }

        for(let i = 0; i < lCells.length; i++){
            lCells[i].style.backgroundColor = "#cecac5";
            }
        }
}

slider.oninput = function() {
    for (let i = 0; i < wCells.length; i++) {
        wCells[i].style.transform = "scale(" + slider.value * .1 + ")";
        }

        for (let i = 0; i < hCells.length; i++) {
            hCells[i].style.transform = "scale(" + slider.value * .1 + ")";
            }
        
        for (let i = 0; i < iCells.length; i++) {
            iCells[i].style.transform = "scale(" + slider.value * .1 + ")";
            }
        
        for (let i = 0; i < tCells.length; i++) {
            tCells[i].style.transform = "scale(" + slider.value * .1 + ")";
            }
        
         for (let i = 0; i < eCells.length; i++) {
         eCells[i].style.transform = "scale(" + slider.value * .1 + ")";
         }
        
         for (let i = 0; i < cCells.length; i++) {
            cCells[i].style.transform = "scale(" + slider.value * .1 + ")";
            }
        
        for (let i = 0; i < aCells.length; i++) {
            aCells[i].style.transform = "scale(" + slider.value * .1 + ")";
            }
        
        for (let i = 0; i < pCells.length; i++) {
            pCells[i].style.transform = "scale(" + slider.value * .1 + ")";
            }
        
        for (let i = 0; i < lCells.length; i++) {
            lCells[i].style.transform = "scale(" + slider.value * .1 + ")";
        }   
}

