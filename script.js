/**
 * Assignment 2 – Interactive CV Webpage (JavaScript)
 * Author: Ahmed Farid Elaswar
 *
 * This file implements six interactive features:
 *   Option 1 – Contact Form with Validation
 *   Option 2 – Show/Hide Sections
 *   Option 3 – Dark Mode / Light Mode Toggle
 *   Option 4 – Dynamic Skills List
 *   Option 5 – Welcome Message
 *   Option 6 – Interactive Project Section
 */

// Wait until the DOM is fully loaded before running any code
document.addEventListener("DOMContentLoaded", function () {

  /* ==============================================
     OPTION 5 – Welcome Message
     ============================================== */

  // Create and display a welcome modal when the page loads
  function showWelcomeMessage() {
    // Build overlay
    var overlay = document.createElement("div");
    overlay.className = "welcome-overlay";

    // Build message box
    overlay.innerHTML =
      '<div class="welcome-box">' +
        '<h2>Welcome!</h2>' +
        '<p>Welcome to my portfolio page! Feel free to explore my CV, toggle sections, switch to dark mode, and send me a message.</p>' +
        '<button id="welcome-close-btn">Continue</button>' +
      '</div>';

    document.body.appendChild(overlay);

    // Close on button click
    document.getElementById("welcome-close-btn").addEventListener("click", function () {
      overlay.remove();
    });

    // Also close when clicking the overlay background
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        overlay.remove();
      }
    });
  }

  showWelcomeMessage();


  /* ==============================================
     OPTION 3 – Dark Mode / Light Mode Toggle
     ============================================== */

  var darkModeBtn = document.getElementById("dark-mode-toggle");

  // Check if the user previously enabled dark mode (stored in localStorage)
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️ Light Mode";
  }

  darkModeBtn.addEventListener("click", function () {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle("dark-mode");

    // Update button text and save preference
    if (document.body.classList.contains("dark-mode")) {
      darkModeBtn.textContent = "☀️ Light Mode";
      localStorage.setItem("darkMode", "enabled");
    } else {
      darkModeBtn.textContent = "🌙 Dark Mode";
      localStorage.setItem("darkMode", "disabled");
    }
  });


  /* ==============================================
     OPTION 2 – Show/Hide Sections
     ============================================== */

  // Get all toggle buttons and attach click handlers
  var toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Find the target content element using the data-target attribute
      var targetId = btn.getAttribute("data-target");
      var targetEl = document.getElementById(targetId);

      if (targetEl) {
        // Toggle the hidden class to show or hide the content
        targetEl.classList.toggle("hidden");

        // Update button text to reflect current state
        if (targetEl.classList.contains("hidden")) {
          // Extract section name from the target ID (e.g., "skills-content" → "Skills")
          var sectionName = targetId.replace("-content", "");
          sectionName = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
          btn.textContent = "Show " + sectionName;
        } else {
          var sectionName2 = targetId.replace("-content", "");
          sectionName2 = sectionName2.charAt(0).toUpperCase() + sectionName2.slice(1);
          btn.textContent = "Hide " + sectionName2;
        }
      }
    });
  });


  /* ==============================================
     OPTION 4 – Dynamic Skills List
     ============================================== */

  var skillInput = document.getElementById("new-skill-input");
  var addSkillBtn = document.getElementById("add-skill-btn");
  var skillsList = document.getElementById("dynamic-skills-list");

  // Add a new skill when the "Add" button is clicked
  addSkillBtn.addEventListener("click", function () {
    addNewSkill();
  });

  // Also allow adding a skill by pressing Enter in the input field
  skillInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addNewSkill();
    }
  });

  function addNewSkill() {
    // Trim whitespace from the input value
    var skillText = skillInput.value.trim();

    // Only add if the input is not empty
    if (skillText !== "") {
      // Sanitize the input to prevent XSS
      var li = document.createElement("li");
      li.textContent = skillText;
      skillsList.appendChild(li);

      // Clear the input field for the next entry
      skillInput.value = "";
      skillInput.focus();
    }
  }


  /* ==============================================
     OPTION 6 – Interactive Project Section
     ============================================== */

  // Get all "Show Details" buttons and add click handlers
  var detailButtons = document.querySelectorAll(".details-btn");

  detailButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // The project-details div is the next sibling element of the button
      var detailsDiv = btn.nextElementSibling;

      if (detailsDiv) {
        // Toggle visibility of the project details
        detailsDiv.classList.toggle("hidden");

        // Update button text
        if (detailsDiv.classList.contains("hidden")) {
          btn.textContent = "Show Details";
        } else {
          btn.textContent = "Hide Details";
        }
      }
    });
  });


  /* ==============================================
     OPTION 1 – Contact Form with Validation
     ============================================== */

  var contactForm = document.getElementById("contact-form");
  var nameInput = document.getElementById("contact-name");
  var emailInput = document.getElementById("contact-email");
  var messageInput = document.getElementById("contact-message");
  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");
  var messageError = document.getElementById("message-error");
  var formSuccess = document.getElementById("form-success");

  contactForm.addEventListener("submit", function (e) {
    // Prevent the default form submission (page reload)
    e.preventDefault();

    // Reset previous error states
    clearErrors();

    var isValid = true;

    // Validate Name: must not be empty
    if (nameInput.value.trim() === "") {
      showError(nameInput, nameError, "Name is required.");
      isValid = false;
    }

    // Validate Email: must not be empty and must match email format
    if (emailInput.value.trim() === "") {
      showError(emailInput, emailError, "Email is required.");
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, emailError, "Please enter a valid email address.");
      isValid = false;
    }

    // Validate Message: must not be empty
    if (messageInput.value.trim() === "") {
      showError(messageInput, messageError, "Message is required.");
      isValid = false;
    }

    // If all fields are valid, show a success message
    if (isValid) {
      formSuccess.textContent = "Thank you, " + nameInput.value.trim() + "! Your message has been sent successfully.";
      formSuccess.classList.remove("hidden");
      contactForm.reset();

      // Hide the success message after 5 seconds
      setTimeout(function () {
        formSuccess.classList.add("hidden");
      }, 5000);
    }
  });

  /**
   * Display an error message for a specific input field
   * @param {HTMLElement} inputEl - The input element with the error
   * @param {HTMLElement} errorEl - The span element to display the error message
   * @param {string} message - The error message text
   */
  function showError(inputEl, errorEl, message) {
    inputEl.classList.add("input-error");
    errorEl.textContent = message;
  }

  /**
   * Clear all error messages and styles from the form
   */
  function clearErrors() {
    nameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");
    messageInput.classList.remove("input-error");
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.classList.add("hidden");
  }

  /**
   * Validate an email address using a regular expression
   * @param {string} email - The email to validate
   * @returns {boolean} True if the email format is valid
   */
  function isValidEmail(email) {
    // Standard email regex pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

});
