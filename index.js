const infoIcon = document.querySelector('.info-icon');
const infoParagraph = document.querySelector('.info-description');
const magicButton = document.querySelector('.magic-button');
const loadingPage = document.querySelector('.loading-page');
const loader = document.querySelector('.loader');

magicButton.addEventListener('click', onMagicButtonClick);
infoIcon.addEventListener('mouseenter', onInfoIconHover);
infoIcon.addEventListener('mouseleave', onInfoIconLoseHover);

function onMagicButtonClick() {
    loadingPage.classList.remove('is-hidden');
    loader.style.animationName = 'load';
    setTimeout(() => {
        loadingPage.classList.add('is-hidden');
        loader.style.remove("animationName");
    }, 9000);

}

function onInfoIconHover() {
infoParagraph.classList.remove('is-hidden');
}

function onInfoIconLoseHover() {
    infoParagraph.classList.add('is-hidden');
}