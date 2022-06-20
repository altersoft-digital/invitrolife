var swiper = new Swiper(".howitworks-swiper", {
    slidesPerView: 2,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 24
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 1,
            spaceBetween: 24
        },
        // when window width is >= 640px
        1180: {
            slidesPerView: 2,
            spaceBetween: 24
        }
    },
});

var swiper = new Swiper(".blog-posts-swiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 24
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        // when window width is >= 640px
        980: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    },
});