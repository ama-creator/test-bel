// mobile menu
const toggleMenu = () => {
  const hamburgerBtn = document.querySelector(".hamburger");
  const menulist = document.querySelector(".mobile-menu");

  hamburgerBtn.addEventListener("click", (event) => {
    hamburgerBtn.classList.toggle("is-active");
    menulist.classList.toggle("mobile-menu--active");
    document.querySelector("html").style.overflowY = "hidden";

    if (!hamburgerBtn.classList.contains("is-active")) {
      menulist.classList.remove("mobile-menu--active");
      document.querySelector("html").style.overflowY = "inherit";
    }
  });
};

toggleMenu();

export default toggleMenu;
