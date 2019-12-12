document.addEventListener('DOMContentLoaded', mountNavButtons)

function mountNavButtons() {
  const navButtons = document.querySelectorAll('[data-target="nav-button"]')

  navButtons.forEach(button => {
    button.addEventListener('click', toggleSection)
  })
}

function toggleSection(event) {
  const button = event.target
  const section = document.querySelector(button.dataset.section)

  const homeSection = document.querySelector('#home')

  const otherSections = document.querySelectorAll('[data-target="nav-section"]')
  const otherButtons = document.querySelectorAll('[data-target="nav-button"]')

  const isHidden = section.classList.contains('hidden')

  if (isHidden) {
    homeSection.classList.add('hidden')

    otherButtons.forEach(section => section.classList.remove('active'))
    button.classList.add('active')

    otherSections.forEach(section => section.classList.add('hidden'))
    section.classList.remove('hidden')

  } else {
    homeSection.classList.remove('hidden')
    button.classList.remove('active')
    section.classList.add('hidden')
  }
}
