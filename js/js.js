// popup обратной связи
let writeUsLink = document.querySelector(".write-us");
let writeUsPopup = document.querySelector(".write-us-popup");
let writeUsForm = writeUsPopup.querySelector(".write-us-form");
let closePopup = document.querySelector(".write-us-close");
let writeUsButton = document.querySelector(".write-us-button button");
let writeUsName = writeUsPopup.querySelector("[name=name]");
let writeUsEmail = writeUsPopup.querySelector("[name=email]");
let writeUsText = writeUsPopup.querySelector("[name=text]");
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

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("popup-show");
  writeUsPopup.classList.remove("popup-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsEmail.value || !writeUsText.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("popup-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", writeUsName.value);
      localStorage.setItem("email", writeUsEmail.value);
      localStorage.setItem("text", writeUsText.value);
    }
  }
});

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
