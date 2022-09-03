export default function initTabMenuAutomation() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li a');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const active = "active";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(active);
    tabMenu[0].classList.add(active);

    function activeTab(index, event) {
      tabContent.forEach((item) => {
        item.classList.remove(active);
      });
      tabMenu.forEach((item) => {
        item.classList.remove(active);
      });
      tabMenu[index].classList.add(active);
      tabContent[index].classList.add(active);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
