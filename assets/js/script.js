document.addEventListener("DOMContentLoaded", function (e) {
  let navToggle = document.getElementById("nav-toggle");
  let navMenu = document.getElementById("nav-menu");

  // Toggle nav
  const toggleMenu = () => {
    if (navMenu.style.display != "block") {
      navMenu.style.display = "block";
    } else {
      navMenu.style.display = "none";
    }
  };

  navToggle.addEventListener("click", toggleMenu);

  // Close nav when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target != navToggle && e.target != navMenu) {
      navMenu.style.display = "none";
    }
  });
});
