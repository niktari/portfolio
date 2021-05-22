let c = document.getElementById("easel");

c.width = window.innerWidth;
c.height = window.innerHeight;

let context = c.getContext("2d");

// create circles: context.fillStyle = "#ff4141";

context.strokeStyle = "#ff4141";
context.lineWidth = 5;
context.lineCap = "round";

function canvasBG(){
context.beginPath();
context.rect(0, 0, c.width, c.height);
  context.fillStyle = "#D0CBBD";
  context.fill();
}

canvasBG();

let shouldPaint = false;

document.onmousedown = function(e){
    shouldPaint = true;
    context.moveTo(e.pageX, e.pageY);
    context.beginPath();
}

document.onmouseup = function(e){
    shouldPaint = false;
}

document.onmousemove = function(e){
    if(shouldPaint){
        context.lineTo(e.pageX, e.pageY);
        context.stroke();
    }
}

let links = document.querySelectorAll("nav#left a")

for (let l of links){
    l.onclick = function(e){
        context.strokeStyle = this.style.backgroundColor;
        e.preventDefault()
    }
}


//document.querySelectorAll("nav a").forEach(link => {
    //link.onclick = function(){
        //context.strokeStyle = this.style.backgroundColor;
    //}
//})

function clearCanvas(){
    context.clearRect(0, 0, c.width, c.height);
}

document.onkeydown = function(e) {
if(e.key == " "){
    let image = c.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=image;
}
}

document.addEventListener('touchstart', function (e) {
    shouldPaint = true
    context.moveTo(e.touches[0].pageX, e.touches[0].pageY);
      context.beginPath()
  })
  
  document.addEventListener('touchend', function () {
    shouldPaint = false
  })
  
  document.addEventListener('touchmove', function(e) {
    if (shouldPaint) {
      context.lineTo(e.touches[0].pageX, e.touches[0].pageY)
      context.stroke()
    }  
  })