const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 3000,
  },

  effect: 'flip',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  loop: true,
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 6,
  
  breakpoints: {
    // when window width is <= 499px
    499: {
        slidesPerView: 2,
        spaceBetweenSlides: 6
    },
    // when window width is <= 999px
    999: {
        slidesPerView: 4,
        spaceBetweenSlides: 8
    },
    1200: {
      slidesPerView: 5,
      spaceBetweenSlides: 8
  },
  },

  autoplay: {
    delay: 3000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  centeredSlides: true,
  roundLengths: true,
  loopAdditionalSlides: 30,


});

var swiper6 = new Swiper(".mySwiper6", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -100, 0],
    },
  },
});