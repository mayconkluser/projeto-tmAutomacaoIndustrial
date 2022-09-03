export default function initTopSectionAutomacao() {
  const linkMenu = document.querySelectorAll('[data-tab="menu"] a[href^="#"]');
  const linkContent = document.querySelector('[data-tab="content"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const top = section.offsetTop;
    const linkContentTop = linkContent.offsetTop;
    window.scrollTo(0, top + (linkContentTop + -100));
  }

  linkMenu.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
