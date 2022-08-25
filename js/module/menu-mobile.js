export default function initMenuMobile() {}

const nav = document.querySelector('[data-menu="btnMenu"]');
const ulMenu = document.querySelector('[data-menu="ulMenu"]');
const ulMenuRemove = document.querySelectorAll(".ul-menu li a");
const active = "active";

function openMenu(event) {
  // ulMenuRemove.forEach((item) => {
  //   item.classList.remove(active);
  // });

  nav.classList.toggle(active);
  ulMenu.classList.toggle(active);
}
nav.addEventListener("click", openMenu);
