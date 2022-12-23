//handle burger menu
const burgerButton = document.querySelector('#burgerButton');
const burgerClosed = document.querySelector('#burgerClosed');
const burgerOpened = document.querySelector('#burgerOpened');
const burgerMenu = document.querySelector('#burgerMenu');

const burgerMenuUl = document.querySelector('#burgerMenuUl');
const navbarContainer = document.querySelector('#navbarContainer');

let isBurgerOpened = false;

const handleBurger = () => {
    if (!isBurgerOpened) {
        burgerClosed.style.display = 'none';
        burgerOpened.style.display = 'block';
        burgerMenu.className = 'burgerMenuOpened'
        isBurgerOpened = true;
    }
    else {
        burgerOpened.style.display = 'none';
        burgerClosed.style.display = 'block';
        burgerMenu.className = 'burgerMenuClosed'
        isBurgerOpened = false;
    }
}

burgerButton.addEventListener('click', handleBurger);


const handleBurgerMenuUlResize = () => {
    let navbarContainerWidth = window.getComputedStyle(navbarContainer).width;
    burgerMenuUl.style.width = navbarContainerWidth;
    burgerMenuUl.style.maxWidth = navbarContainerWidth;
}

handleBurgerMenuUlResize();

window.addEventListener("resize", handleBurgerMenuUlResize);
