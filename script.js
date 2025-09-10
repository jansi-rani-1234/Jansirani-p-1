//=============== TOGGLE MENU ===============

const menuIcon = document.getElementById("menu-icon-js");

const navBar = document.querySelector(".navbar");

const navTouchClose = document.getElementById("nav-tc-js");

menuIcon.addEventListener("click", () => {

  navBar.classList.toggle("show");

  navTouchClose.classList.toggle("active");

});

navTouchClose.addEventListener("click", () => {

  navBar.classList.remove("show");

  navTouchClose.classList.remove("active");

});

//=============== CLOSE MENU ON LINK CLICK ===============

document.querySelectorAll(".navbar a").forEach(link => {

  link.addEventListener("click", () => {

    navBar.classList.remove("show");

    navTouchClose.classList.remove("active");

  });

});