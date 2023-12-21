let accordions = document.getElementsByClassName("accordion");
let panels = document.getElementsByClassName("accordion-panel");
let i;

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
    } else {
      event.target.classList.add("active");
    }
    for (const accordion of accordions) {
      if (accordion != event.target && accordion.classList.contains("active")) {
        accordion.classList.remove("active");
      }
    }

    for (const panel of panels) {
      if (panel.previousElementSibling.classList.contains("active")) {
        // panel.style.display = "block";
        panel.classList.add("show");
      } else {
        panel.classList.remove("show");
        // panel.style.display = "none";
      }
    }
  });
}
