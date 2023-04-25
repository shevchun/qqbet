import $ from 'jquery';
import 'slick-carousel';

export default () => {

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

}