function showAlert() {
  const email = document.getElementById("email").value;
  const alertBox = document.getElementById("alert");
  if (email) {
      alertBox.innerHTML = "Obrigado por se inscrever, " + email;
  } else {
      alertBox.innerHTML = "Por favor, digite um email válido.";
  }
  alertBox.style.display = "block";
  setTimeout(() => {
      alertBox.style.display = "none";
  }, 3000);
}