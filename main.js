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

top_button.onclick = function () {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

function show_info() {
    info_overlay.style.display = 'block';
    document.body.style.overflowY = 'hidden';
    event.preventDefault();
}

function hide_info() {
    info_overlay.style.display = 'none';
    document.body.style.overflowY = 'auto';
}