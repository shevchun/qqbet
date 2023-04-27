import './markup-menu.js'
import $ from 'jquery'
import svg4everybody from 'svg4everybody'

import custom from './components/custom.js'
import sliders from './components/sliders.js'
import Tabs from './components/tabs.js'

globalThis.$ = $
globalThis.jQuery = $

document.addEventListener('DOMContentLoaded', () => {
  globalThis.Tabs = new Tabs()
  svg4everybody()
  sliders()
  custom()
})

$(window).on('load resize', () => {
  if ($(window).width() < 1200) {
    $('.header__mobile').append($('.header__nav'))
    $('.header__mobile').append($('.header__top-right'))
  } else {
    $('.header__bottom').append($('.header__nav'))
    $('.header__top-right').insertAfter($('.header__top-left'))
  }
})
