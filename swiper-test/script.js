var swiper = new Swiper(".mySwiper", {
        speed: 500,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      let bio_more = document.getElementById("more-bio");
      let bio_less = document.getElementById("less-bio");
      let bio_extended = document.getElementsByClassName("bio-ext");
      
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
      
      bio_more.onclick = function() {
      
          for (let i = 0; i < bio_extended.length; i++) {

            bio_extended[i].style.display= 'inline-block';
            bio_more.style.display = 'none';
              
             
            //   if(bio_extended[i].style.display == 'inline-block'){
            //   bio_extended[i].style.display= 'none';
            //   } else{
            //       bio_extended[i].style.display= 'inline-block';
            //       bio_more.style.display = 'none';
            //   }
              
      
          }
      
          }

          bio_less.onclick = function() {
      
            for (let i = 0; i < bio_extended.length; i++) {
                
                bio_extended[i].style.display= 'none';
                bio_more.style.display = 'inline-block';

            }
        
            }
      