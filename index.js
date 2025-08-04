    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const subMenu = document.querySelector(".sub-menu");

        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("active");
            subMenu.classList.toggle("active");
        });
    });

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".service-button");
  const pricesContainer = document.querySelector(".prices");
  const priceBoxes = document.querySelectorAll(".prices > div");

  // Fade out helper
  function fadeOutPriceBox(box) {
    box.classList.remove("active");
    box.classList.add("closing");

    box.addEventListener("transitionend", () => {
      box.classList.remove("closing");
      pricesContainer.classList.remove("active");
      pricesContainer.style.pointerEvents = "none";
    }, { once: true });
  }

  // Button click: show the relevant price box
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");

      // Hide all price boxes
      priceBoxes.forEach(el => {
        if (el.classList.contains("active")) {
          fadeOutPriceBox(el);
        }
      });

      // Show selected one
      const target = document.getElementById(targetId);
      if (target) {
        target.classList.add("active");
        pricesContainer.classList.add("active");
        pricesContainer.style.pointerEvents = "auto";
      }
    });
  });

  // Close button click
  document.querySelectorAll(".close-button").forEach(button => {
    button.addEventListener("click", () => {
      const priceBox = button.closest(".prices > div");
      if (priceBox && priceBox.classList.contains("active")) {
        fadeOutPriceBox(priceBox);
      }
    });
  });

  // Click outside to close
  document.addEventListener("click", (event) => {
    const isPriceBox = event.target.closest(".prices > div");
    const isButton = event.target.closest(".service-button");

    if (!isPriceBox && !isButton) {
      const activeBox = document.querySelector(".prices > div.active");
      if (activeBox) {
        fadeOutPriceBox(activeBox);
      }
    }
  });
});
