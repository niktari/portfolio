var swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    }
});

let top_button = document.getElementById('top-button');
let info_overlay = document.getElementById('info-overlay');

window.onscroll = function () {
    top_button.style.transform = 'rotate(' + window.pageYOffset / 3 + 'deg)';

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        top_button.style.display = "block";
    } else {
        top_button.style.display = "none";
    }
}

// top_button.onclick = function () {


//     window.scrollTo({ top: 0, behavior: 'smooth' });

//     // document.body.scrollTop = 0;
//     // document.documentElement.scrollTop = 0;

// }

// Add smooth scrolling to all links
// $("#top-button-wrapper").on('click', function (event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();

//         // Store hash
//         var hash = this.hash;

//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800, function () {

//             // Add hash (#) to URL when done scrolling (default click behavior)
//             window.location.hash = hash;

//         });
//     } // End if
// });

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

function show_info() {
    info_overlay.style.display = 'block';
    document.body.style.overflowY = 'hidden';
    event.preventDefault();
}

function hide_info() {
    info_overlay.style.display = 'none';
    document.body.style.overflowY = 'auto';
}