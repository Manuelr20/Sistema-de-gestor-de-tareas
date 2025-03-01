document.getElementById('signup-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('login-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('signup-form').classList.add('hidden');
  document.getElementById('login-form').classList.remove('hidden');
});

document.getElementById('forgot-password').addEventListener('click', function(event) {
  event.preventDefault();
  alert("¡Olvidaste tu contraseña! Se enviará un enlace de restablecimiento a tu correo electrónico.");
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  
  if (!isValidEmail(email)) {
      document.getElementById('error-message').textContent = "Por favor, ingresa un correo electrónico válido.";
      return false;
  }
  
  if (password !== confirmPassword) {
      document.getElementById('error-message').textContent = "Las contraseñas no coinciden. Por favor, inténtalo de nuevo.";
      return false;
  }
  
  window.location.href = "principal.html";
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  window.location.href = "principal.html";
});

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
