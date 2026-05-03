const menuButton = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const signupForm = document.querySelector(".signup-form");

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
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = signupForm.querySelector("button");
    if (button) {
      button.textContent = "Reset Requested";
      button.setAttribute("aria-live", "polite");
    }
  });
}
