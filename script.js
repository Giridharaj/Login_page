document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const email = document.querySelector("input[name='email']");
  const password = document.querySelector("input[name='password']");
  const lockIcon = document.querySelector(".fa-lock");


  // Strict email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  // Password:
  // Minimum 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,20}$/;

  /* =========================
      PASSWORD TOGGLE
  ========================== */
  lockIcon.style.pointerEvents = "auto";
  lockIcon.style.cursor = "pointer";

  lockIcon.addEventListener("click", () => {
    const type =
      password.type === "password" ? "text" : "password";
    password.type = type;

    lockIcon.classList.toggle("fa-lock");
    lockIcon.classList.toggle("fa-lock-open");
  });
  email.addEventListener("input", () => validateEmail());
  password.addEventListener("input", () => validatePassword());

  function validateEmail() {
    if (!emailRegex.test(email.value.trim())) {
      setError(email);
      return false;
    }
    setSuccess(email);
    return true;
  }

  function validatePassword() {
    if (!passwordRegex.test(password.value.trim())) {
      setError(password);
      return false;
    }
    setSuccess(password);
    return true;
  }

  function setError(input) {
    input.style.borderColor = "#ff4d4d";
  }

  function setSuccess(input) {
    input.style.borderColor = "#00c853";
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      showMessage("Invalid input. Please check your details.", "error");
    } else {
      showMessage("Login successful!", "success");
    }
  });
  function showMessage(msg, type) {
    const div = document.createElement("div");
    div.className = `alert ${type}`;
    div.innerText = msg;

    document.body.appendChild(div);

    setTimeout(() => div.remove(), 3000);
  }
});document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const email = document.querySelector("input[name='email']");
  const password = document.querySelector("input[name='password']");
  const lockIcon = document.querySelector(".fa-lock");

  // Regex Validation

  // Strict email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  // Password:
  // Min  8 characters
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,20}$/;

  // Password toggle
  
  lockIcon.style.pointerEvents = "auto";
  lockIcon.style.cursor = "pointer";

  lockIcon.addEventListener("click", () => {
    const type =
      password.type === "password" ? "text" : "password";
    password.type = type;

    lockIcon.classList.toggle("fa-lock");
    lockIcon.classList.toggle("fa-lock-open");
  });

  /* Real-time validation*/
  email.addEventListener("input", () => validateEmail());
  password.addEventListener("input", () => validatePassword());

  function validateEmail() {
    if (!emailRegex.test(email.value.trim())) {
      setError(email);
      return false;
    }
    setSuccess(email);
    return true;
  }

  function validatePassword() {
    if (!passwordRegex.test(password.value.trim())) {
      setError(password);
      return false;
    }
    setSuccess(password);
    return true;
  }

  function setError(input) {
    input.style.borderColor = "#ff4d4d";
  }

  function setSuccess(input) {
    input.style.borderColor = "#00c853";
  }

  /* form submit*/
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      showMessage("Invalid input. Please check your details.", "error");
    } else {
      showMessage("Login successful!", "success");
    }
  });
  // MessageBox
  function showMessage(msg, type) {
    const div = document.createElement("div");
    div.className = `alert ${type}`;
    div.innerText = msg;

    document.body.appendChild(div);

    setTimeout(() => div.remove(), 3000);
  }
});