const button = document.getElementById("check-button");
const version = document.querySelector(".version");

button.addEventListener("click", () => {
  version.hidden = false;
});