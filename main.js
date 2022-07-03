let btn = document.getElementById("btn");

btn.onclick = function () {
  window.scrollTo(0, 0);
};
window.onscroll = function () {
  if (this.scrollY >= 2514) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};
let icon = document.getElementsByClassName("toggle-menu");
icon[0].onclick = function () {
  icon[0].classList.toggle("showHeading");
};
