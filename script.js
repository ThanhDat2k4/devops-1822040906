const button = document.getElementById("check-button");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "JavaScript hoạt động thành công!";
});