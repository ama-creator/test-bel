// mobile categories
const showCategory = () => {
  const categoriesBtn = document.querySelectorAll(".mobile-menu__category");
  categoriesBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const categoriesBtnActive = document.querySelector(
        ".mobile-menu__item-link--active"
      );
      if (categoriesBtnActive) {
        categoriesBtnActive.classList.remove("mobile-menu__item-link--active");
        return false;
      }
      item.classList.toggle("mobile-menu__item-link--active");
    });
  });
};
showCategory();

export default showCategory;
