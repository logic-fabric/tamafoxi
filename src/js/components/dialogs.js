export function displayMessageInDialog(message) {
  const dialog = document.querySelector(".c-dialog");

  dialog.innerHTML = message ? `<p>${message}</p>` : "";
}
