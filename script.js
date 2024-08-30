document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach((el) => el.remove());

    // Validate first name
    if (!/^[a-zA-Z]{2,}$/.test(firstName.value)) {
      showError(
        firstName,
        "First name must contain only letters and be at least 2 characters long."
      );
      valid = false;
    }

    // Validate last name
    if (!/^[a-zA-Z]{2,}$/.test(lastName.value)) {
      showError(
        lastName,
        "Last name must contain only letters and be at least 2 characters long."
      );
      valid = false;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      showError(email, "Email is not valid.");
      valid = false;
    }

    // Validate password
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value)) {
      showError(
        password,
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
      valid = false;
    }

    // Validate confirm password
    if (password.value !== confirmPassword.value) {
      showError(confirmPassword, "Passwords do not match.");
      valid = false;
    }

    if (valid) {
      alert("Registration successful!");
      form.reset();
    }
  });

  function showError(input, message) {
    const error = document.createElement("div");
    error.classList.add("error");
    error.textContent = message;
    input.parentElement.appendChild(error);
  }
});
