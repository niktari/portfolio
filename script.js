var swiper = new Swiper(".mySwiper", {
        speed: 500,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: true,
        },
      });


      let bio_more = document.getElementById("more-bio");
      let bio_less = document.getElementById("less-bio");
      let bio_extended = document.getElementsByClassName("bio-ext");
      
      bio_more.onclick = function() {
      
          for (let i = 0; i < bio_extended.length; i++) {

            bio_extended[i].style.display= 'inline-block';
            bio_more.style.display = 'none';
      
          }
      
          }

          bio_less.onclick = function() {
      
            for (let i = 0; i < bio_extended.length; i++) {
                
                bio_extended[i].style.display= 'none';
                bio_more.style.display = 'inline-block';

            }
        
            }
      
// media queries

function mobileQuery(x) {
  if (x.matches) { // If media query matches

    for (let i = 0; i < $(".info").length; i++) {
      
      $(".info")[i].onclick = function() {
         
          if($('.info-wrapper')[i].style.display == 'flex'){
              $('.info-wrapper')[i].style.display = 'none';
              $(this).removeClass('less');
              $(this).html('<span></span><span></span><span></span>');
          } else{
              $('.info-wrapper')[i].style.display = 'flex';
              $(this).addClass('less').text('Less');
          }
          
      }
  
  }

  } else {
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
  }
}

var x = window.matchMedia("(min-device-width: 320px) and (max-device-width: 480px)")
mobileQuery(x) // call listener function at run time
x.addListener(mobileQuery) // attach listener function on state changes