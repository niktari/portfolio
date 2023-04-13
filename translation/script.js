let img;
let pixel;
let slider;

let mainColorPicker;
let glitchColorPicker;

let spacingX;
let spacingY;
let margin = 40;

let container = document.getElementById('sketch_container');
let sketch_width = container.clientWidth;


function preload() {
  img = loadImage('translation/images/letter_n_glitch.png');
}

function setup() {

  img.loadPixels();
  img.resize(sketch_width, sketch_width);

  let sketch = createCanvas(sketch_width, sketch_width);
  sketch.parent('sketch_container')

  noStroke();

  console.log(sketch_width)

  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont("neue-haas-unica")
  
  frameRate(10)

  slider = createSlider(10, 30, 20, 2);
  slider.parent("slider");

  mainColorPicker = createColorPicker('rgb(70,68,224)');
  mainColorPicker.parent("pickers");

  glitchColorPicker = createColorPicker('rgb(147,145,204)');
  glitchColorPicker.parent("pickers");
  
  button = createButton('Download Knitting Chart');
  button.mousePressed(downloadKnittingChart);
  button.parent("download");
  button.class("button_style")


}

function draw() {
  background('rgb(204, 200, 196)');
  
  drawPattern();
  printNumbers();


}


function drawPattern(){

  // translate(windowWidth/2 - img.width/2, windowHeight/2 - img.height/2)

  spacingX = slider.value();
  spacingY = slider.value() - 5;
  
    for (let x = margin; x < img.width - margin; x+=spacingX) {
    for (let y = margin; y < img.height - margin; y+=spacingY) {

      
      stroke('rgb(59,59,59)')
      pixel = getQuick(img, x, y);

  let glitchAmt = randomRangeWithIncrements(-spacingX, spacingX * 3, spacingX);
      
      if(y % 2 == 0){
      fill('rgb(204, 200, 196)')
      rect(x, y, spacingX, spacingY);
      }else{
        fill('rgb(185,181,176)')
        rect(x, y, spacingX, spacingY);
      }
      
    if (random(255) > pixel[0]){
        fill(mainColorPicker.color());
        rect(x, y, spacingX, spacingY) 
      } else if (random(255) > pixel[0] && pixel[0] > 10){
        fill(glitchColorPicker.color());
        rect(x + glitchAmt, y, spacingX, spacingY) 
      }

    }
  }
  
}

function printKey(){
  
  stroke('rgb(59,59,59)');
  fill('rgb(204, 200, 196)');
  rect(margin + 75, 10, spacingX, spacingY);
  
  fill('rgb(185,181,176)');
  rect(margin, 10, spacingX, spacingY)
  
  noStroke();
  fill('rgb(59,59,59)');
  text('Purl', margin + 25, 10);
  text('Knit', margin + 75 + 25, 10);
}

function printNumbers() {

  let cellsY = [];
  let cellsX = [];
  let cols;
  let rows;

  noStroke();
  fill('rgb(59,59,59)');
  let text_size = spacingX/2;
  textSize(text_size);
  
  let rangeY = img.height - margin - margin;
  let numberOfSlicesY = Math.floor(rangeY / spacingY);

  let rangeX = img.width - margin - margin;
  let numberOfSlicesX = Math.floor(rangeX / spacingX);

  for (let y = margin; y < img.height - margin; y += spacingY) {
    cellsY.push(y);

    rows = cellsY.indexOf(y);
    text(numberOfSlicesY - rows, img.width - spacingX, y);
    // text(rows, (img.width - margin) + spacingX, img.height - y);
    text(numberOfSlicesY - rows, margin - spacingX, y);
  }

    for (let x = margin; x < img.width - margin; x+=spacingX) {

        cellsX.push(x);
        cols = cellsX.indexOf(x)
        text(cols, x, img.height - spacingY);
        text(cols, x, margin - spacingX);

      }

}



function getQuick(img, x, y) {
  
  const i = (y * img.width + x) * 4;
  return [
    img.pixels[i],
    img.pixels[i + 1],
    img.pixels[i + 2],
    img.pixels[i + 3],
  ];
}


// from https://coderwall.com/p/ro4mda/js-random-number-range-increment
function randomRangeWithIncrements(min, max, inc) {
    min = min || 0;
    inc = inc || 1;
    if(!max) { return new Error('need to define a max');}

    return Math.floor(Math.random() * (max - min) / inc) * inc + min;
}

function downloadKnittingChart(){
  saveCanvas('knitting-chart', 'png');
}


function windowResized() {
  resizeCanvas(sketch_width, sketch_width);
}