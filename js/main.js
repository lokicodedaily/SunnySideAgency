const burger = document.querySelector("#hamburger");

const menu = document.querySelector(".menu");

burger.addEventListener("click", activeMenu);

function activeMenu() {
  menu.classList.toggle("active");
}

const header = document.querySelector("#headers_body");
header.addEventListener("click", () => menu.classList.remove("active"));
