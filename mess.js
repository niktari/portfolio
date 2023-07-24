let srcLayer;
let maskLayer;
let textureLayer;
let maskLayerTexture;

let graphic_size = 500;

let semicircle_first = document.querySelectorAll('.semicircle.first');
let semicircle_second = document.querySelectorAll('.semicircle.second');

let first_color, second_color;


function setup() {

  const c = createCanvas(windowWidth, windowWidth);
  mess(c);
//   mess_resize();
  pixelDensity(1);

  srcLayer = createGraphics(graphic_size, graphic_size);
  maskLayer = createGraphics(graphic_size, graphic_size);
  textureLayer = createGraphics(graphic_size, graphic_size);
  maskLayerTexture = createGraphics(graphic_size, graphic_size);


  // for(let i = 0; i < circles_elem.length; i++){

      let random_color_index = floor(random(0, circles_elem.length));

      console.log(random_color_index)

      first_color = getComputedStyle(semicircle_first[random_color_index]).backgroundColor;
      second_color = getComputedStyle(semicircle_second[random_color_index]).backgroundColor;

  // }

  // first_color = 'rgb(95, 100, 231)';
  // second_color = 'rgb(72, 182, 142)';

}

function draw() {

  clear();

  
  drawSrcLayer();
  
  let maskedImg = srcLayer.get();

  let textureImg = textureLayer.get();
  
  
  for (let i = 0; i < 30; i++) {
    
    drawMaskLayer(i);
    
    maskedImg.mask(maskLayer);
    
    
    push();
    translate(mouseX, mouseY);
    rotate(5 * noise(frameCount/100 + 1 * i * 0.01));
    image(maskedImg, -graphic_size/2, -graphic_size/2);
    pop();
  }

  push();
  imageMode(CENTER);
  translate(mouseX, mouseY);
  drawMaskLayerTexture();
  textureImg.mask(maskLayerTexture);
  drawTexture();
  image(textureImg, 0, 0);
  pop();

  
  


}

function drawSrcLayer() {

    let document_body = getComputedStyle(document.body).backgroundColor;

    // console.log(document_body)

if(document_body ==='rgb(35, 31, 32)'){
    srcLayer.background('rgb(35, 31, 32)');
} else {
    srcLayer.background('rgb(240, 241, 236)');
}

  srcLayer.noStroke();

  let points = 20;
  let pointAngle = 360 / points;
  let radius = graphic_size;
  
  for (let angle = 0; angle < 360; angle += pointAngle) {
    let mappedX = map(mouseX, 0, windowWidth, -graphic_size, graphic_size, true);
    let mappedY = map(mouseY, 0, windowHeight, -graphic_size, graphic_size, true);
    
    let x = cos(radians(angle)) * radius;
    let y = sin(radians(angle)) * radius;

    srcLayer.push();
    srcLayer.translate(graphic_size/2, graphic_size/2);

    if (angle <= 180) {

      srcLayer.fill(first_color);

    } else {
      srcLayer.fill(second_color);
    }

    for(let i = 0; i < circles_elem.length; i++){

      circles_elem[i].onclick = function() { 
        first_color = getComputedStyle(semicircle_first[i]).backgroundColor;
        second_color = getComputedStyle(semicircle_second[i]).backgroundColor;
      }

    }

    srcLayer.triangle(mappedX, mappedY, x, y, x + graphic_size/(graphic_size/10) * 10, y + graphic_size/(graphic_size/10) * 10);
    srcLayer.pop();
  }
}

function drawMaskLayer(i) {
  maskLayer.clear();
  maskLayer.noStroke();
  maskLayer.ellipse(graphic_size/2, graphic_size/2, graphic_size - (i * graphic_size/30));
}

function drawMaskLayerTexture() {
    maskLayerTexture.clear();
    maskLayerTexture.noStroke();
    maskLayerTexture.ellipse(graphic_size/2, graphic_size/2, graphic_size);
  }


function drawTexture() {
  textureLayer.clear();
  textureLayer.noStroke();
  
  for (let i = 0; i <= graphic_size; i += 5) {
    for (let j = 0; j <= graphic_size; j+=5) {
			textureLayer.stroke(255,255,255);
			textureLayer.point(i, j);
          
	}
}
  
}

function mess(c, wait_ms = 2000) {
    c.canvas.classList.add("mess");
    c.canvas.classList.add("hide");
    setTimeout(show, 1);
    c.canvas.setAttribute("style", "");
  
    // fade the canvas out when mouse is still
    let hide_timeout = null;
  
    function show() {
      c.canvas.classList.remove("hide");
      hide_timeout && clearTimeout(hide_timeout);
      hide_timeout = setTimeout(hide, wait_ms);
  
      if (window.mess_show) mess_show();
    }
  
    function hide() {
      c.canvas.classList.add("hide");
  
      if (window.mess_hide) mess_hide();
    }
  
    window.addEventListener("mousemove", () => {
      show();
    });
  
    // resize canvas
    window.addEventListener("resize", () => {
      resizeCanvas(windowWidth, windowHeight);
      c.canvas.setAttribute("style", "");
  
      if (window.mess_resize) mess_resize();
    });
  }