// Declearing the menu variables;


const openIcon = document.querySelector('.header-menu-open');
const closeIcon = document.querySelector('.header-menu-close');
const headerNavs = document.querySelector('.header-navs');


//evenlisteners invoked function




// load eventlisterners
loadEventListeners = () => {
    openIcon.addEventListener('click', menuOpen);
    closeIcon.addEventListener('click', menuClose);
}

loadEventListeners()

//Menu-open function

function menuOpen() {
    openIcon.classList.add('open-menu');
    closeIcon.classList.add('close-menu');
    openIcon.classList.remove('header-menu-open');
    closeIcon.classList.remove('header-menu-close');
    headerNavs.classList.add('close-menu')
}

function menuClose() {

    closeIcon.classList.add('header-menu-close');
    openIcon.classList.add('header-menu-open');
    openIcon.classList.remove('open-menu');
    closeIcon.classList.remove('close-menu');
    headerNavs.classList.remove('close-menu');

}