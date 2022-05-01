$(document).ready(function () {
  $('.work-slider-main').slick({
    slidesToShow: 2,
    infinite: true,
    autoplay: false,
    arrows: true,
    prevArrow:
      '<div class="arrow left"><i class="fas fa-angle-left"></i></div>',
    nextArrow:
      '<div class="arrow right"><i class="fas fa-angle-right"></i></div>',
    responsive: [
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 3,
          vertical: true,
        },
      },
    ],
  })

  $('.founder-slider').slick({
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    arrows: true,
    prevArrow:
      '<div class="arrow left"><i class="fas fa-angle-left"></i></div>',
    nextArrow:
      '<div class="arrow right"><i class="fas fa-angle-right"></i></div>',
    responsive: [
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 2,
          vertical: true,
          arrows: true,
        },
      },
    ],
  })
})
