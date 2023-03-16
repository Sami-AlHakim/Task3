// Activating burger icon navbar
burgerIcn = document.querySelector(".burger-icn");
burgerIcn.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}