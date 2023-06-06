const infoIcon = document.querySelector(".info-icon");
const infoParagraph = document.querySelector(".info-description");
const magicButton = document.querySelector(".magic-button");
const loadingPage = document.querySelector(".loading-page");
const loader = document.querySelector(".loader");
const backdrop = document.querySelector(".backdrop");
const resultModal = document.querySelector(".result");
const resultButton = document.querySelector(".result-button");

magicButton.addEventListener("click", onMagicButtonClick);
infoIcon.addEventListener("mouseenter", onInfoIconHover);
infoIcon.addEventListener("mouseleave", onInfoIconLoseHover);
resultButton.addEventListener("click", closeModal);

let timeOut = null;

function onMagicButtonClick() {
  openModal();
  loader.style.animationName = "load";
  timeOut = setTimeout(() => {
    loader.style.animationName = "";
    loadingPage.classList.add("invisible");
    resultModal.classList.remove("invisible");
  }, 7900);
}

function openModal() {
  backdrop.classList.remove("is-hidden");
  backdrop.addEventListener("click", onModalClose);
  window.addEventListener("keydown", onEscapeClick);
}

function closeModal() {
  clearTimeout(timeOut);
  backdrop.classList.add("is-hidden");
  loader.style.animationName = "";
  loadingPage.classList.remove("invisible");
  resultModal.classList.add("invisible");
  backdrop.removeEventListener("click", onModalClose);
  window.removeEventListener("keydown", onEscapeClick);
}

function onModalClose(e) {
  if (e.target !== e.currentTarget) {
    return;
  }

  closeModal();
}

function onEscapeClick(e) {
  if (e.code !== "Escape") {
    return;
  }
  closeModal();
}

function onInfoIconHover() {
  infoParagraph.classList.remove("is-hidden");
}

function onInfoIconLoseHover() {
  infoParagraph.classList.add("is-hidden");
}
