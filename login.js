document.querySelector(".loginput").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");

  if (email === savedEmail && password === savedPassword) {
    showToast("You have been logged in successfully✅", "success");
  } else {
    showToast("Incorrect email or password❌", "error");
  }
});


function showToast(message, type) {
  const toastBody = document.querySelector("#liveToast .toast-body");
  toastBody.textContent = message;

  // غيّر اللون حسب الحالة
  if (type === "success") {
    toastBody.style.color = "green";
  } else {
    toastBody.style.color = "red";
  }

  const toast = new bootstrap.Toast(document.getElementById('liveToast'));
  toast.show();
}
