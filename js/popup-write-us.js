let writeUsLink = document.querySelector(".write-us");
let writeUsPopup = document.querySelector(".write-us-popup");
let writeUsForm = writeUsPopup.querySelector(".write-us-form");
let closePopup = document.querySelector(".write-us-close");
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

  if (storageName) {
    writeUsName.value = storageName;
    writeUsEmail.focus();
  } else {
    writeUsName.focus();
  }

  if (storageEmail) {
    writeUsEmail.value = storageEmail;
    writeUsText.focus();
  } else {
    writeUsEmail.focus();
  }

  if (storageText) {
    writeUsText.value = storageText;
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
