export default function initMenuMobile() {}

const nav = document.querySelector('[data-menu="btnMenu"]');
const ulMenu = document.querySelector('[data-menu="ulMenu"]');
const activeLinksWidth = document.querySelectorAll(".ul-menu li a");
const active = "active";

function openMenu(event) {
  nav.classList.toggle(active);
  ulMenu.classList.toggle(active);
}

function activeLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add(active);
  }
}

activeLinksWidth.forEach(activeLink);
nav.addEventListener("click", openMenu);
