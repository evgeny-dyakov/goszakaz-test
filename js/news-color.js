import {tabletWidth} from './util.js'

const news = document.querySelectorAll('.news--color')

const isTouchDevice = !!('ontouchstart' in window || navigator.maxTouchPoints)

news.forEach(el => {
  el.addEventListener('mouseenter', () => onNewsMouseMove(el))

  el.addEventListener('mouseleave', () => onNewsMouseMove(el))
})

function onNewsMouseMove(el) {

  if (isTouchDevice) return

  el.querySelector('.secondary-btn').classList.toggle('secondary-btn--white')
}
