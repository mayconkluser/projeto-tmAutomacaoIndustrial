export default function initMenuMobile() {}

const nav = document.querySelector('[data-menu="btnMenu"]');
const ulMenu = document.querySelector('[data-menu="ulMenu"]');
const active = "active";

function openMenu(event) {
  nav.classList.toggle(active);
  ulMenu.classList.toggle(active);
}
nav.addEventListener("click", openMenu);
