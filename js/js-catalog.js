// popup добавления товара в корзину
let productOnLinks = document.querySelectorAll(".catalog-buy-link");
let productOnLink;
let productOnPopup = document.querySelector(".product-on-popup");
let productOnClose = productOnPopup.querySelector(".product-on-close");

for (let i=0; i < productOnLinks.length; i++) {
  productOnLink = productOnLinks[i];
  productOnLink.addEventListener("click", popupShow);
}

function popupShow(evt) {
  evt.preventDefault();
  productOnPopup.classList.add("popup-show");
}
productOnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  productOnPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (productOnPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      productOnPopup.classList.remove("popup-show");
    }
  }
});
