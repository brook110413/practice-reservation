$(document).ready(() => {
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1.4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.4,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    }
  });
  var mySwiper2 = new Swiper('.swiper-container2', {
    // Optional parameters
    slidesPerView: 1.4,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });
});