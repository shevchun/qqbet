import $ from 'jquery';
import 'slick-carousel';

export default () => {

  if ($('.online-slots__slider').length) {
    $('.online-slots__slider').slick({
      slidesToShow: 3,
      rows: 2,
      infinite: false,
      prevArrow: '<span class="slick-prev"><svg width="13" height="24" viewBox="0 0 13 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.873 24L1.366 14.48C0.711864 13.8228 0.344633 12.9333 0.344633 12.006C0.344633 11.0787 0.711864 10.1892 1.366 9.532L10.884 0L13 2.121L3.482 11.652C3.38826 11.7458 3.33561 11.8729 3.33561 12.0055C3.33561 12.1381 3.38826 12.2652 3.482 12.359L12.99 21.879L10.873 24Z" /></svg></span>',
      nextArrow: '<span class="slick-next"><svg width="13" height="24" viewBox="0 0 13 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.127 24L11.634 14.48C12.2881 13.8228 12.6554 12.9333 12.6554 12.006C12.6554 11.0787 12.2881 10.1892 11.634 9.532L2.116 0L0 2.121L9.518 11.652C9.61174 11.7458 9.66439 11.8729 9.66439 12.0055C9.66439 12.1381 9.61174 12.2652 9.518 12.359L0.0100002 21.879L2.127 24Z" /></svg></span>',
      responsive: [
        {
          breakpoint: 1200,
          settings: "unslick"
        }
      ]
    })
  }

  if ($('.testimonials__slider').length) {
    $('.testimonials__slider').slick({
      slidesToShow: 3,
      arrows: false,
      infinite: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  }

  if ($('.first-screen__slider').length) {
    $('.first-screen__slider').slick({
      slidesToShow: 1,
      arrows: false,
      fade: true,
      asNavFor: '.first-screen__nav-slider'
    })
    $('.first-screen__nav-slider').slick({
      slidesToShow: 5,
      arrows: false,
      asNavFor: '.first-screen__slider',
      focusOnSelect: true,
      variableWidth: true
    })
  }

  if ($('.providers__slider').length) {
    $('.providers__slider').slick({
      slidesToShow: 1,
      arrows: false,
      infinite: false,
      fade: true,
      asNavFor: '.providers__nav'
    })
    $('.providers__nav').slick({
      asNavFor: '.providers__slider',
      infinite: false,
      focusOnSelect: true,
      swipeToSlide: true,
      variableWidth: true,
      prevArrow: '<span class="slick-prev"><svg width="8" height="14" viewBox="0 0 13 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.873 24L1.366 14.48C0.711864 13.8228 0.344633 12.9333 0.344633 12.006C0.344633 11.0787 0.711864 10.1892 1.366 9.532L10.884 0L13 2.121L3.482 11.652C3.38826 11.7458 3.33561 11.8729 3.33561 12.0055C3.33561 12.1381 3.38826 12.2652 3.482 12.359L12.99 21.879L10.873 24Z" /></svg></span>',
      nextArrow: '<span class="slick-next"><svg width="8" height="14" viewBox="0 0 13 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.127 24L11.634 14.48C12.2881 13.8228 12.6554 12.9333 12.6554 12.006C12.6554 11.0787 12.2881 10.1892 11.634 9.532L2.116 0L0 2.121L9.518 11.652C9.61174 11.7458 9.66439 11.8729 9.66439 12.0055C9.66439 12.1381 9.61174 12.2652 9.518 12.359L0.0100002 21.879L2.127 24Z" /></svg></span>',
    })
  }

}