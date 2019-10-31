// popup обратной связи
let writeUsLink = document.querySelector(".write-us");
let writeUsPopup = document.querySelector(".write-us-popup");
let writeUsForm = document.querySelector(".write-us-form");
let closePopup = document.querySelector(".write-us-close");
let writeUsButton = document.querySelector(".write-us-button button");
let writeUsName = document.querySelector("[name=name]");
let writeUsEmail = document.querySelector("[name=email]");
let writeUsText = document.querySelector("[name=text]");

let mapLink = document.querySelector(".map-mini");
let mapPopup = document.querySelector(".map-popup");
let mapClose = document.querySelector(".map-close");

let productOnLinks = document.querySelectorAll(".catalog-buy-link");
let productOnLink;
let productOnPopup = document.querySelector(".product-on-popup");
let productOnClose = productOnPopup.querySelector(".product-on-close");
let isStorageSupport = true;
let storageName = "";
let storageEmail = "";
let storageText = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
  storageText = localStorage.getItem("text");
} catch (err) {
  isStorageSupport = false;
}

if (writeUsLink) {
  writeUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("popup-show");
    writeUsName.focus();
    if (storageName) {
      writeUsName.value = storageName;
      writeUsEmail.focus();
    }
    if (storageEmail) {
      writeUsEmail.value = storageEmail;
      writeUsText.focus();
    }
    if (storageText){
      writeUsText.value = storageText;
      writeUsButton.focus();
    }
  });
}

if (closePopup) {
  closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("popup-show");
    writeUsPopup.classList.remove("popup-error");
  });
}

if (writeUsForm) {
  writeUsForm.addEventListener("submit", function (evt) {
    if (!writeUsName.value || !writeUsEmail.value || !writeUsText.value) {
      evt.preventDefault();
      writeUsPopup.classList.remove("popup-error");
      writeUsPopup.classList.add("popup-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", writeUsName.value);
        localStorage.setItem("email", writeUsEmail.value);
        localStorage.setItem("text", writeUsText.value);
      }
    }
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("popup-show");
      writeUsPopup.classList.remove("popup-error");
    }
  }
});

// popup карты
if (mapLink) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup-show");
  });
}

if (mapClose) {
    mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popup-show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("popup-show");
    }
  }
});

if (productOnLinks){
  for (let i=0; i < productOnLinks.length; i++) {
    productOnLink = productOnLinks[i];
    productOnLink.addEventListener("click", popupShow);
  }
}

function popupShow(evt) {
  evt.preventDefault();
  productOnPopup.classList.add("popup-show");
}

if (productOnClose) {
  productOnClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    productOnPopup.classList.remove("popup-show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (productOnPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      productOnPopup.classList.remove("popup-show");
    }
  }
});

