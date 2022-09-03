export default function initTopSectionAutomacao() {
  const linkMenu = document.querySelectorAll('[data-tab="menu"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const top = section.offsetTop;
    const width = section.offsetLeft;
    if (width < 200) {
      window.scrollTo(0, top - 70);
    }
  }

  linkMenu.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
