const news = document.querySelectorAll('.news--color')

news.forEach(el => {
  el.addEventListener('mouseenter', () => {

    el.querySelector('.secondary-btn').classList.toggle('secondary-btn--white')
  })

  el.addEventListener('mouseleave', () => {

    el.querySelector('.secondary-btn').classList.toggle('secondary-btn--white')
  })
})
