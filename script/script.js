document.addEventListener("DOMContentLoaded", function () {
  // Particles.js initialization
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#0000ff" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.5,
        anim: { enable: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00bbff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "out",
      },
    },
    retina_detect: true,
  });

  // Animation on scroll
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateOnScroll() {
    const elements = document.querySelectorAll(".slide-in-left, .slide-in-right");
    elements.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  window.addEventListener("load", animateOnScroll);

  // Apply animations to list items with delay
  const listItems = document.querySelectorAll(".custom-item");
  listItems.forEach(function (item, index) {
    setTimeout(function () {
      item.style.animation = "borderColorChange 3s infinite linear";
    }, index * 500);
  });

  // Display last modified date
  const lastModified = new Date(document.lastModified);
  const options = { year: "numeric", month: "long", day: "numeric" };

  const lastModifiedElement = document.getElementById("last-modified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = lastModified.toLocaleDateString("en-GB", options); // Use "en-GB" for day-month-year format
  }
});