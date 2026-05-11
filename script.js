const menuButton = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const signupForm = document.querySelector(".signup-form");
const formStatus = document.querySelector("[data-form-status]");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

if (signupForm) {
  const params = new URLSearchParams(window.location.search);

  if (params.get("joined") === "1" && formStatus) {
    formStatus.textContent = "You are in. Check your inbox for Day One.";
  }

  signupForm.addEventListener("submit", (event) => {
    const button = signupForm.querySelector("button");
    if (button) {
      button.textContent = "Sending Day One...";
      button.disabled = true;
      button.setAttribute("aria-live", "polite");
    }

    if (formStatus) {
      formStatus.textContent = "Submitting. Stay locked in.";
    }
  });
}
