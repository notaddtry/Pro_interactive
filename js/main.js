let coffeItems = document.querySelectorAll('.coffe__items_item')
let coffeParent = document.querySelector('.coffe__items')
let coffeNextBtn = document.querySelector('.coffe__btn_next')
let coffePrevBtn = document.querySelector('.coffe__btn_prev')

let comboItems = document.querySelectorAll('.combo__items_item')
let comboParent = document.querySelector('.combo__items')
let comboNextBtn = document.querySelector('.combo__btn_next')
let comboPrevBtn = document.querySelector('.combo__btn_prev')

if (coffeItems.length > 4) {
  for (let i = 4; i < coffeItems.length; i++) {
    coffeItems[i].classList.add('hide')
  }
}

coffeNextBtn.addEventListener('click', function change() {
  changeCoffeSlide('next')
  coffeNextBtn.removeEventListener('click', change)
  coffeNextBtn.style.cursor = 'auto'
  coffeItems.forEach((coffeItem) => {
    coffeItem.classList.remove('hide')
  })
  for (let i = 0; i < 2; i++) {
    coffeItems[i].classList.add('hide')
  }
})

function changeCoffeSlide(direction) {
  const width = 591
  if (direction === 'next') {
    coffeParent.style.transform = `translateX(-${width}px)`
    coffeNextBtn.style.transform = `translateX(${width}px)`
    coffePrevBtn.style.transform = `translateX(${width}px) rotate(180deg)`

    coffePrevBtn.classList.remove('hide')
    coffePrevBtn.style.cursor = 'pointer'
    coffeNextBtn.classList.add('hide')
    coffeNextBtn.style.cursor = 'auto'

    coffePrevBtn.addEventListener('click', function change() {
      changeCoffeSlide('prev')
      coffePrevBtn.removeEventListener('click', change)
      coffeItems.forEach((coffeItem) => {
        coffeItem.classList.remove('hide')
        for (let i = 4; i < coffeItems.length; i++) {
          coffeItems[i].classList.add('hide')
        }
      })
    })
  } else if (direction === 'prev') {
    coffeParent.style.transform = `translateX(0px)`
    coffeNextBtn.style.transform = `translateX(0px)`
    coffePrevBtn.style.transform = `translateX(0px) rotate(180deg)`

    coffeNextBtn.classList.remove('hide')
    coffeNextBtn.style.cursor = 'pointer'
    coffePrevBtn.classList.add('hide')
    coffePrevBtn.style.cursor = 'auto'

    coffeNextBtn.addEventListener('click', function change() {
      changeCoffeSlide('next')
      coffeNextBtn.removeEventListener('click', change)
      coffeItems.forEach((coffeItem) => {
        coffeItem.classList.remove('hide')
      })
      for (let i = 0; i < 2; i++) {
        coffeItems[i].classList.add('hide')
      }
    })
  }
}

if (comboItems.length > 2) {
  for (let i = 3; i < comboItems.length; i++) {
    comboItems[i].classList.add('hide')
  }
}

comboNextBtn.addEventListener('click', function change() {
  changeComboSlide('next')
  comboNextBtn.removeEventListener('click', change)
  comboNextBtn.style.cursor = 'auto'
  comboItems.forEach((comboItem) => {
    comboItem.classList.remove('hide')
  })
  for (let i = 0; i < 1; i++) {
    comboItems[i].classList.add('hide')
  }
})

function changeComboSlide(direction) {
  const width = 390
  if (direction === 'next') {
    comboParent.style.transform = `translateX(-${width}px)`
    comboNextBtn.style.transform = `translateX(${width}px)`
    comboPrevBtn.style.transform = `translateX(${width}px) rotate(180deg)`

    comboPrevBtn.classList.remove('hide')
    coffePrevBtn.style.cursor = 'pointer'
    comboNextBtn.classList.add('hide')
    coffeNextBtn.style.cursor = 'auto'

    comboPrevBtn.addEventListener('click', function change() {
      changeComboSlide('prev')
      comboPrevBtn.removeEventListener('click', change)
      comboItems.forEach((comboItem) => {
        comboItem.classList.remove('hide')
        for (let i = 3; i < comboItems.length; i++) {
          comboItems[i].classList.add('hide')
        }
      })
    })
  } else if (direction === 'prev') {
    comboParent.style.transform = `translateX(0px)`
    comboNextBtn.style.transform = `translateX(0px)`
    comboPrevBtn.style.transform = `translateX(0px) rotate(180deg)`

    comboNextBtn.classList.remove('hide')
    coffeNextBtn.style.cursor = 'pointer'
    comboPrevBtn.classList.add('hide')
    coffePrevBtn.style.cursor = 'auto'

    comboNextBtn.addEventListener('click', function change() {
      changeComboSlide('next')
      comboNextBtn.removeEventListener('click', change)
      comboItems.forEach((comboItem) => {
        comboItem.classList.remove('hide')
      })
      for (let i = 0; i < 1; i++) {
        comboItems[i].classList.add('hide')
      }
    })
  }
}

let giftBtns = document.querySelectorAll('.giftset__side_btn')

giftBtns.forEach((giftBtn) => {
  giftBtn.style.cursor = 'pointer'
  giftBtn.addEventListener('click', () => {
    changeGiftSlide()
  })
})

function changeGiftSlide(num) {
  num = event.target.innerHTML
  giftBtns.forEach((giftBtn) => {
    giftBtn.classList.remove('show')
  })
  if (num === '1') {
    giftBtns[0].classList.add('show')
  } else if (num === '2') {
    giftBtns[1].classList.add('show')
  } else if (num === '3') {
    giftBtns[2].classList.add('show')
  }
}

let cartCount = 0
let buyBtns = document.querySelectorAll('.btn_buy')
let cart = document.querySelector('.nav_cart')
let cartIncreate = document.querySelector('.nav__cart_increate')

buyBtns.forEach((buyBtn) => {
  buyBtn.addEventListener('click', function increate() {
    cartCount++
    cart.style.width = '24px'
    cart.style.height = '24px'
    cartIncreate.style.opacity = '1'
    cartIncreate.innerHTML = `${cartCount}`
  })
})
