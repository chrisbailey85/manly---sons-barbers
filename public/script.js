const mobileMenuBtn = document.querySelector('.hamburger')
const navigation = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')
const body = document.querySelector('body')
const toggleModeBtn = document.querySelector('.toggle__mode')
const cards = document.querySelectorAll('.card')
const teamCards = document.querySelectorAll('.team__card')
mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('is-active')
  mobileMenuBtn.classList.contains('is-active')
    ? (mobileMenuBtn.ariaExpanded = true)
    : (mobileMenuBtn.ariaExpanded = false)
  navigation.classList.toggle('open')
  body.classList.toggle('nav__open')
})

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (navigation.classList.contains('open')) {
      navigation.classList.remove('open')
      mobileMenuBtn.ariaExpanded = false
      mobileMenuBtn.classList.remove('is-active')
      body.classList.remove('nav--open')
    }
  })
})

const updateAnimDelaty = () => {
  if (body.clientWidth >= 1024) {
    cards.forEach((card, idx) => {
      let cardIdx = idx + 1
      card.setAttribute('data-aos-delay', `${cardIdx * 400}`)
    })
    teamCards.forEach((card, idx) => {
      let cardIdx = idx + 1
      card.setAttribute('data-aos-delay', `${cardIdx * 400}`)
    })
  }
}

window.addEventListener('OMContentLoaded', updateAnimDelaty())
