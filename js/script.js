// Toogle Class Active

const navbarNav = document.querySelector(".navbar-nav");

// ketika menu bar diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//Search form
const srchBox = document.querySelector(".search-form");

// ketika menu search diklik
document.querySelector("#search").onclick = () => {
  srchBox.classList.toggle("active");
};
