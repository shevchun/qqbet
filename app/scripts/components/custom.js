import $ from 'jquery'

export default () => {

  $('.text-content > table').wrap('<div class="table-scroll"></div>')

  $('.js-close-popup').on('click', ()=> {
    $('.popup').removeClass('active')
  })

  $('.js-active-form').on('click', () => {
    $('.testimonials-page__box').toggleClass('active-review-form')
    if ($(window).width() > 1200) {
      $('.active-review-form').length && $('html, body').animate({ scrollTop: 0 }, 500) 
    }
  })

  $('.star-rating__item').on('click', function rateClick() {
    const parent = $(this).parent('.star-rating')
    const rating = $(this).data('value')
    const valueHolder = parent.find('.star-rating__value')

    if (!parent.hasClass('disabled')) {
      $(this).addClass('active')
      $(this)
        .prevAll('.star-rating__item')
        .addClass('active')
      $(this)
        .nextAll('.star-rating__item')
        .removeClass('active')
      valueHolder.val(rating).change()
      valueHolder.attr('value', rating)
    }
  })

  const copyContent = async (codeVal) => {
    try {
      await navigator.clipboard.writeText(codeVal)
      alert('Code copied')
    } catch (err) {
      alert('Failed to copy')
    }
  }

  $('.js-copy-code-btn').on('click', function copy() {
    const codeVal = $(this).siblings('.js-copy-code').attr('data-code')
    copyContent(codeVal)
  })


  if ($('.holder__aside-sticky, .js-sticky').length) {
    $('.wrapper').addClass('wrapper--no-ovh')
  }

  if ($(window).width() < 1200) {
    if ($('.bonuses__item').length) {
      $('.bonuses__item').each(function () {
        $(this).find('.bonuses__item-label').insertAfter($(this).find('.bonuses__item-title'))
      })
    }

    $('.accounts__item').eq(0).addClass('active')
    $('.accounts__item').on('click', function accFunc() {
      $('.accounts__item').removeClass('active')
      $(this).addClass('active')
    })

    $('.header__mobile-menu').on('click', () => {
      $('.header').toggleClass('active-menu')
      $('.menu-item-has-children').removeClass('active')
    })

    $('.menu-item-has-children > a, .menu-item-has-children > span').on('click', function mobileMenu() {
      $(this).parents('.menu-item-has-children').toggleClass('active')
      return false
    })
  }

  $('.questions__head').on('click', function questionsFunc() {
    $(this).parents('.questions__item').toggleClass('active')
    $(this).siblings('.questions__item-body').slideToggle()
  })

  // $('.header__mobile-menu').on('click', () => {
  //   $('.header__mobile').addClass('active')
  //   setTimeout(() => {
  //     $('.header__mobile-box').addClass('active')
  //   }, 300);
  // })

  // $('.header__mobile-overlay').on('click', () => {
  //   $('.header__mobile-box').removeClass('active')
  //   setTimeout(() => {
  //     $('.header__mobile').removeClass('active')
  //   }, 300);
  // })

  //   $('.lang__current').on('click', function lang(event) {
  //     event.stopPropagation();
  //     $(this).parents('.lang').toggleClass('active')
  //   })

  //   $(document).on("click", (event) => {
  //     event.stopPropagation();
  //     if ($(event.target).closest(".lang__list").length) return;
  //     $('.lang').removeClass('active')
  //   });

  function isFloat(value) {
    return typeof value === 'number' &&
      !Number.isNaN(value) &&
      !Number.isInteger(value);
  }

  $('[data-rate]').each((index, element) => {
    let val = $(element).attr('data-rate')
    if (!isFloat(val)) {
      val = parseFloat(val).toFixed(1)
    }
    const full = val.split('.')[0] || null
    const fraction = val.split('.')[1] || null
    $(element).find($('.rate__item-holder-inner')).each((i, item) => {
      if (i <= +full) {
        $(item).addClass('active')
      }
      if (i === +full) {
        $(item).addClass('active').css('width', `${fraction}0%`)
      }
    })
  })

  //   $(window).on('scroll', function scrollPage() {
  //     const heightWindow = 50
  //     if ($(this).scrollTop() >= heightWindow) {
  //       $('.header').addClass('header--scroll')
  //     } else {
  //       $('.header').removeClass('header--scroll')
  //     }
  //   })

  //   $('.table-content__list a').on('click', function clickDownScroll() {
  //     const marginTop = 110
  //     const scrollEl = $(this).attr('href')
  //     if ($(scrollEl).length !== 0) {
  //       $('html, body').animate(
  //         {
  //           scrollTop: $(scrollEl).offset().top - marginTop,
  //         },
  //         500
  //       )
  //     }
  //     return false
  //   })

  //   $('.js-scroll-top').on('click', () => {
  //     $('html, body').animate({
  //       scrollTop: 0
  //     }, 500);
  //   });
}