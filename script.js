const button = document.getElementById("check-button");

button.addEventListener("click", () => {
  const version = document.querySelector(".version").textContent.trim();
  window.alert(version);
});