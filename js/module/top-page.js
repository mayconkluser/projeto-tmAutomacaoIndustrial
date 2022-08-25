export default function initTopPage() {
  const btnTop = document.querySelector('[data-footer="top"]');

  function subir() {
    window.scrollTo(0, 0);
  }

  btnTop.addEventListener("click", subir);
}
