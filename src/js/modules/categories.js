// categories

const openCategories = () => {
  const categoryItems = document.querySelectorAll(".categories-list__item");

  categoryItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const activeCategory = document.querySelector(
        ".categories-list__item--active"
      );

      activeCategory &&
        activeCategory.classList.remove("categories-list__item--active");

      item.classList.add("categories-list__item--active");
    });
  });
};

openCategories();

export default openCategories;
