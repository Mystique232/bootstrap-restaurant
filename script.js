
document.addEventListener("DOMContentLoaded", function () {
  // Update the copyright year automatically
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Close the mobile navigation after selecting a link
  const navLinks = document.querySelectorAll(
    "#mainNav .nav-link, #mainNav .btn"
  );

  const navMenu = document.getElementById("mainNav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (
        navMenu &&
        navMenu.classList.contains("show") &&
        window.bootstrap
      ) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        collapse.hide();
      }
    });
  });

  // Contact form feedback
  const contactForm = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (contactForm && feedback) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      feedback.textContent =
        "Thank you for contacting Savora! Your message has been prepared successfully. Please note that this demo does not send messages to a real restaurant.";

      feedback.className = "form-feedback success";
      contactForm.reset();
    });
  }
});
