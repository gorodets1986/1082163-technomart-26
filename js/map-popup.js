let mapLink = document.querySelector(".map-mini");
let mapPopup = document.querySelector(".map-popup");
let mapClose = mapPopup.querySelector(".map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("popup-show");
    }
  }
});
