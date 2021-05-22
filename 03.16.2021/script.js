let currentSlide = 0;
let totalSlides;

for (let i = 0; i < $(".info").length; i++) {

    $(".info")[i].onclick = function() {
       
        if($('.info-wrapper')[i].style.display == 'grid'){
            $('.info-wrapper')[i].style.display = 'none';
            $(this).removeClass('less');
            $(this).html('<span></span><span></span><span></span>');
        } else{
            $('.info-wrapper')[i].style.display = 'grid';
            $(this).addClass('less').text('Less');
        }
        
    }

}

// setInterval(function autoSlide(){

//     nextSlide();

// }, 3000);

function nextSlide(carouselIndex){

    currentSlide = currentSlide + 1;

    totalSlides =  $(".carousel").eq(carouselIndex).find("img").length;

    console.log(totalSlides);

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    let leftPosition = 'calc(' + -currentSlide * 25 + '%' + ' + ' + currentSlide * 0.5 + 'em' + ')';

    $(".carousel").eq(carouselIndex).find("img").css('left', leftPosition);


}

function previousSlide(carouselIndex){

    currentSlide = currentSlide - 1;

    totalSlides =  $(".carousel").eq(carouselIndex).find("img").length;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    let leftPosition = 'calc(' + -currentSlide * 25 + '%' + ' + ' + currentSlide * 0.5 + 'em' + ')';

    $(".carousel").eq(carouselIndex).find("img").css('left', leftPosition);

}


// for (let i = 0; i < $('.next').length; i++) {


// $('.next').on('click', function(){

//     nextSlide();

// })

// }

// $('.prev').on('click', function(){

//     previousSlide();

// })

