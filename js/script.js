window.addEventListener("scroll", function () {
  console.log("Scrolling");
  const menu = document.querySelector(".menu");
  if (window.scrollY > 100) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
});
