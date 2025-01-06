export default function dropdown() {
  const dropdownContainer = document.getElementById("dropdown-container");
  const menuButton = document.getElementById("menu-button");
  const menuCloseButton = document.getElementById("menu-close-button");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const menulinks = document.querySelectorAll("li a");

  menuButton.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      dropdownMenu.classList.add("visible");
    }
  });

  window.addEventListener("click", (e) => {
    const clickedInsideDropdown = dropdownContainer.contains(e.target);
    const clickedMenuCloseButton = e.target === menuCloseButton;
    const clickedMenuLink = Array.from(menulinks).some(link => link === e.target);

    if (!clickedInsideDropdown || clickedMenuCloseButton || clickedMenuLink) {
      dropdownMenu.classList.remove("visible");
    }
  });
}
