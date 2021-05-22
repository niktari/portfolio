// let currentSlide = 0;
// let carouselSlide;
// let totalSlides;

// let ellipses_bio = document.getElementById("biography");
// let bio_extended = document.getElementsByClassName("bio-ext");

// for (let i = 0; i < $(".info").length; i++) {

//     $(".info")[i].onclick = function() {
       
//         if($('.info-wrapper')[i].style.display == 'grid'){
//             $('.info-wrapper')[i].style.display = 'none';
//             $(this).removeClass('less');
//             $(this).html('<span></span><span></span><span></span>');
//         } else{
//             $('.info-wrapper')[i].style.display = 'grid';
//             $(this).addClass('less').text('Less');
//         }
        
//     }

// }

// ellipses_bio.onclick = function() {

//     for (let i = 0; i < bio_extended.length; i++) {
       
//         if(bio_extended[i].style.display == 'inline-block'){
//         bio_extended[i].style.display= 'none';
//         } else{
//             bio_extended[i].style.display= 'inline-block';
//         }
        

//     }

//     }


// setInterval(function autoSlide(){

//     nextSlide();

// }, 3000);

// function nextSlide(carouselIndex){

//     totalSlides =  $(".carousel").eq(carouselIndex).find("img").length;

//     // carouselSlide = ($(".carousel").eq(carouselIndex).find("img")[currentSlide]);

//     currentSlide = currentSlide + 1;
    
//     if (currentSlide >= totalSlides) {
//         currentSlide = 0;
//     }

//     let leftPosition = 'calc(' + -currentSlide * 25 + '%' + ' + ' + currentSlide * 0.5 + 'em' + ')';

//     $(".carousel").eq(carouselIndex).find("img").css('left', leftPosition);


// }

// function previousSlide(carouselIndex){

//     currentSlide = currentSlide - 1;

//     totalSlides =  $(".carousel").eq(carouselIndex).find("img").length;

//     if (currentSlide < 0) {
//         currentSlide = totalSlides - 1;
//     }

//     let leftPosition = 'calc(' + -currentSlide * 25 + '%' + ' + ' + currentSlide * 0.5 + 'em' + ')';

//     $(".carousel").eq(carouselIndex).find("img").css('left', leftPosition);

// }

// function returnCarousel(carouselIndex){

//     carouselSlide = $(".carousel").eq(carouselIndex).find("img")[currentSlide];

//     return currentSlide;

// }


// for (let i = 0; i < $('.next').length; i++) {


// $('.next').on('click', function(){

//     nextSlide();

// })

// }

// $('.prev').on('click', function(){

//     previousSlide();

// })


// draws a rainbow maze

let p5_canvas;
let lines = 50;
let line_closeness = 1;
let in_scale = .01;
let out_scale = 100;

function setup() {
    pixelDensity(1);
    p5_canvas = createCanvas(windowWidth, windowHeight);
    $(p5_canvas.canvas).addClass("mess");
    $(p5_canvas.canvas).addClass("hide");
    $(p5_canvas.canvas).attr("style", "");



    // set up drawing
    noFill();
    colorMode(HSB, 1000);
}


// noise sampling control
let offset_sample_scale = .01;
let offset_scale = 100;


// brush state
let old_x = false;
let old_y = false;
let hue = 0;

function draw() {
    // don't start if p5 hasn't got a mouse position yet
    if (mouseX == 0 && mouseY == 0) {
        return;
    }

    // init mouse_state
    if (old_x === false) {
        old_x = mouseX;
        old_y = mouseY;
    }

    // draw brush
    brush(old_x, old_y, mouseX, mouseY);

    old_x = mouseX;
    old_y = mouseY;
}





function brush(x1, y1, x2, y2) {

    // draw line as series of 3 pixel line segments
    // this smooths out the curves
    let steps = dist(x1, y1, x2, y2) / 3;
    steps = max(steps, 1);

    for (let n = 0; n < steps; n++) {

        //color
        hue = ++hue % 1000;
        stroke(hue, 1000, 1000, 200);


        // find start/end of segment   
        let start_x = lerp(x1, x2, n / steps);
        let start_y = lerp(y1, y2, n / steps);
        let end_x = lerp(x1, x2, (n + 1) / steps);
        let end_y = lerp(y1, y2, (n + 1) / steps);


        //draw brush 
        strokeWeight(1);
        for (let i = 0; i < lines; i++) {
            noiseLine(start_x, start_y, end_x, end_y, i * line_closeness / lines, in_scale, out_scale);
        }
    }
}

function noiseLine(x1, y1, x2, y2, n, in_scale, out_scale) {

    x1 += (noise(x1 * in_scale, y1 * in_scale, n) - .5) * out_scale;
    y1 += (noise(x1 * in_scale, y1 * in_scale, n) - .5) * out_scale;

    x2 += (noise(x2 * in_scale, y2 * in_scale, n) - .5) * out_scale;
    y2 += (noise(x2 * in_scale, y2 * in_scale, n) - .5) * out_scale;

    line(x1, y1, x2, y2);
}


// house keeping

// fade the canvas out and reset when mouse is still

let hide_timeout = null;
let clear_timeout = null;

function mouseMoved() {
    $(p5_canvas.canvas).removeClass("hide");
    clearTimeout(hide_timeout);
    clearTimeout(clear_timeout);
    hide_timeout = setTimeout(() => {
        $(p5_canvas.canvas).addClass("hide");
    }, 1000);

    clear_timeout = setTimeout(() => {
        clear();
    }, 2100);
}


// rebuild canvas on resize
let resize_timeout = null;
$(window).on("resize", (e) => {

    clearTimeout(resize_timeout);
    resize_timeout = setTimeout(() => {
        resizeCanvas && resizeCanvas(windowWidth, windowHeight);
        $(p5_canvas.canvas).attr("style", "");
    }, 100);

});