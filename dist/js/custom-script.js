document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.querySelector(".js-show-password");
  const toggleButton = document.querySelector(".js-password-icon");
  const checks = document.querySelectorAll(".login__form-password-check");

  function validatePassword() {
    const password = passwordInput.value;
    const hasMinLength = password.length >= 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    checks.forEach((check) => {
      const checkType = check.dataset.check;
      if (
        (checkType === "length" && hasMinLength) ||
        (checkType === "special" && hasSpecialChar)
      ) {
        check.classList.add("valid");
      } else {
        check.classList.remove("valid");
      }
    });
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      const isPasswordVisible = passwordInput.type === "text";
      passwordInput.type = isPasswordVisible ? "password" : "text";
      toggleButton.classList.toggle("show-password", !isPasswordVisible);
    });
  }
  if (passwordInput) {
    passwordInput.addEventListener("input", validatePassword);
  }
});
