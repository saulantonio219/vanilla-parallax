const building1 = document.querySelector(".building1");
const building2 = document.querySelector(".building2");
const building3 = document.querySelector(".building3");
const building4 = document.querySelector(".building4");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  building1.style.left = value * -0.2 + "px";
  building2.style.marginTop = value * 1 + "px";
  building3.style.left = value * -1 + "px";
  building4.style.left = value * 0.5 + "px";
});
