function copyDiscord() {
  const tempInput = document.createElement("input");
  tempInput.value = "nootieboy0512";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Discord username copied: nootieboy0512");
}
