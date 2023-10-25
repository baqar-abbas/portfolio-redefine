/* eslint-disable */
//Mobile Menu links Popup
const navMenu = document.querySelector(".nav-menu");
const cross = document.querySelector("#cross");
const mobileMenu = document.querySelector(".mobile-menu");
const hamMenu = document.querySelector("#hamburger-menu");

const menuOpen = (event) => {
    navMenu.style.display = "none";
    mobileMenu.style.display = "flex";
    event.preventDefault();
}

const menuClose = () => {
    navMenu.style.display = "block";
    mobileMenu.style.display = "none";
}

hamMenu.addEventListener("click", menuOpen);
cross.addEventListener("click", menuClose);
mobileMenu.addEventListener("click", menuClose);