// EmailJS
// template_fsf4o8m
// service_55toxca
// _KyDg9uKgvsqdacZp

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape")
  const x = event.clientX * scaleFactor
  const y = event.clientX * scaleFactor

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact() {
    event.preventDefault();  // so it doesn't refresh the page when clicking submit
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
      .sendForm(
        'service_55toxca',
        'template_fsf4o8m',
        event.target,
        '_KyDg9uKgvsqdacZp'
      ).then(() => {
        loading.classList.remove("modal__overlay--invisible")
        success.classList += " modal__overlay--visible"
      }).catch(() => {
        loading.classList.remove("modal__overlay--invisible")
        alert(
            "The email service is temprarily unavailable. Please contact me directly on aamistoso10@gmail.com"
        )
      })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
    
}

