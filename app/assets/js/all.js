console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   freeMode: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });