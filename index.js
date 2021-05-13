const navLink = document.querySelectorAll('.navigation__item');
const checkbox = document.querySelector('.navigation__checkbox');



for (let i of navLink) {
  i.addEventListener('click', checkboxOff)
}

function checkboxOff() {
  checkbox.checked = false;
}




// const popup = document.querySelector('.popup');
// const popupContent = document.querySelector('.content');
// const hidingButton = document.querySelectorAll('.hiding-button');

// for (let button of hidingButton) {
//   button.addEventListener('click', showPopup)
// };

// popup.addEventListener('click', function(){
//   popup.classList.add('popup-hidden')
// })

// function showPopup(){
//   popup.classList.remove('popup-hidden');
// }

const popUpWindow = document.querySelector('.popup')
const popUp = document.querySelector('.popup__content');
const bookingButtons = document.querySelectorAll('.hiding-button');

popUpWindow.addEventListener('click', function(e){
  if (!popUp.contains(e.target)){
    popUpWindow.classList.add('is-hidden')
  }
})

for (let button of bookingButtons){
  button.addEventListener('click', ()=> {
    popUpWindow.classList.remove('is-hidden')
  })
}
