import "./styles.css";

const dropdownContainer = document.getElementById("dropdown-container");
const menuButton = document.getElementById("menu-button");
const menuCloseButton = document.getElementById("menu-close-button");
const dropdownMenu = document.getElementById("dropdown-menu");

menuButton.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible");
  }
});

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target) || (e.target.contains(menuCloseButton))) {
    dropdownMenu.classList.remove("visible"); 
  }
});
