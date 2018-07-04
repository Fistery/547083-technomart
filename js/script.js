var link = document.querySelector(".map-button-info");
var modalmap = document.querySelector(".modal-page-map");
if(modalmap) {
  var login = modalmap.querySelector(".name-form");
  var email = modalmap.querySelector(".one-form");
  var textarea = modalmap.querySelector(".modal-textarea");
  var form = modalmap.querySelector("form");
  var close = document.querySelector(".modal-close");
  var login = modalmap.querySelector(".name-form");
  var email = modalmap.querySelector(".one-form");
  var textarea = modalmap.querySelector(".modal-textarea");
  var form = modalmap.querySelector("form");
}
var buyup = document.querySelectorAll(".green-back-button");
var buypage = document.querySelector(".buy-modal-page");
var buyClose = document.querySelector(".link-modal-exit");
var priceClose = document.querySelector(".modal-price-link");
var mainSlider = document.querySelector(".main-slider");
if(mainSlider) {
  var sliderLinkOne = document.querySelector(".slide-button-one");
  var sliderOne = document.querySelector(".one-slide");
  var sliderLinkTwo = document.querySelector(".slide-button-two");
  var sliderTwo = document.querySelector(".two-slide");
  var sliderRight = document.querySelector(".main-slader-left-link");
  var sliderLeft = document.querySelector(".main-slider-right-link");
}

var PopupMap = document.querySelector(".popup-map");
if(PopupMap) {
var PopupMapLink = document.querySelector(".map-button");
var PopupExit = PopupMap.querySelector(".link-modal-exit-popup");
}

for (let i = 0; i < buyup.length; i++) {
  buyup[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  buypage.classList.add("modal-up");
});
}

buyClose.addEventListener("click", function (evt){
  evt.preventDefault();
buypage.classList.remove("modal-up");
})

priceClose.addEventListener("click", function (evt){
  evt.preventDefault();
buypage.classList.remove("modal-up");
})

sliderRight.addEventListener("click", function (evt){
  evt.preventDefault();
  sliderOne.classList.toggle("slide-display");
  sliderTwo.classList.toggle("slide-display");
})

sliderLeft.addEventListener("click", function (evt){
  evt.preventDefault();
  sliderOne.classList.toggle("slide-display");
  sliderTwo.classList.toggle("slide-display");
})

sliderLinkOne.addEventListener("click", function (evt){
  evt.preventDefault();
  sliderOne.classList.add("slide-display");
  sliderTwo.classList.remove("slide-display");
})

sliderLinkTwo.addEventListener("click", function (evt){
  evt.preventDefault();
  sliderOne.classList.remove("slide-display");
  sliderTwo.classList.add("slide-display");
})

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalmap.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalmap.classList.remove("modal-show");
});

form.addEventListener("submit", function () {
  if(!login.value || !email.value || !textarea.value) {
    evt.preventDefault();
    console.log("введите логин и пароль");
  }
});

priceClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buypage.classList.remove("modal-up");
});

PopupMapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  PopupMap.classList.add("modal-up");
})

PopupExit.addEventListener("click", function (evt) {
  evt.preventDefault();
  PopupMap.classList.remove("modal-up");
})
