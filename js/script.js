  var mainSlider = document.querySelector(".main-slider");
  if(mainSlider) {
  var sliderLinkOne = document.querySelector(".slide-button-one");
  var sliderOne = document.querySelector(".one-slide");
  var sliderLinkTwo = document.querySelector(".slide-button-two");
  var sliderTwo = document.querySelector(".two-slide");
  var sliderRight = document.querySelector(".main-slader-left-link");
  var sliderLeft = document.querySelector(".main-slider-right-link");
}
  var buypage = document.querySelector(".buy-modal-page");
  if(buypage){
  var buyup = document.querySelectorAll(".green-back-button");
  var buyClose = document.querySelector(".link-modal-exit");
  var priceClose = document.querySelector(".modal-price-link");
}
  var modalmap = document.querySelector(".modal-page-map");
  if(modalmap) {
  var link = document.querySelector(".map-button-info");
  var login = modalmap.querySelector(".name-form");
  var email = modalmap.querySelector(".one-form");
  var textarea = modalmap.querySelector(".modal-textarea");
  var form = modalmap.querySelector("form");
  var close = document.querySelector(".modal-close");
  var login = modalmap.querySelector(".name-form");
  var email = modalmap.querySelector(".one-form");
  var textarea = modalmap.querySelector(".modal-textarea");
  var form = modalmap.querySelector("form");
  var buttonModalMap = modalmap.querySelector(".modal-page-button");
}
  var PopupMap = document.querySelector(".popup-map");
  if(PopupMap) {
  var PopupMapLink = document.querySelector(".map-button");
  var PopupExit = PopupMap.querySelector(".link-modal-exit-popup");
}

if (mainSlider) {
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
}

if (buypage) {
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
}

if (modalmap) {
  var isStorageSupport = true;
    var storage = "";

    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalmap.classList.add("modal-show");
    if (storage) {
      login.value = storage;
      password.focus();
      } else {
    login.focus();
  }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalmap.classList.remove("modal-show");
    modalmap.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if(!login.value || !email.value || !textarea.value) {
      evt.preventDefault();
      modalmap.classList.remove("modal-error");
      modalmap.offsetWidth = modalmap.offsetWidth;
      modalmap.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        local.storage.setItem("login", login.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalmap.classList.contains("modal-show")) {
        modalmap.classList.remove("modal-show");
        modalmap.classList.remove("modal-error");
      }
    }
  });
}

if (PopupMap) {
  PopupMapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    PopupMap.classList.add("modal-up");
  })

  PopupExit.addEventListener("click", function (evt) {
    evt.preventDefault();
    PopupMap.classList.remove("modal-up");
  })
}
