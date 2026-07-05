// Vanastree site script — mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggleBtn = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-list");

  if (toggleBtn && navList) {
    toggleBtn.addEventListener("click", function () {
      navList.classList.toggle("open");
    });
  }

// Close mobile nav if a link is clicked
  document.querySelectorAll(".nav-list a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (navList.classList.contains("open")) {
        navList.classList.remove("open");
      }
    });
});
