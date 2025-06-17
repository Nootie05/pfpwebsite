function copyDiscord() {
  // Maak een tijdelijk input element aan
  var tempInput = document.createElement("input");
  tempInput.value = "nootieboy0512"; // Discord gebruikersnaam
  document.body.appendChild(tempInput);

  // Selecteer de tekst en kopieer het naar het klembord
  tempInput.select();
  document.execCommand("copy");

  // Verwijder het tijdelijke input element
  document.body.removeChild(tempInput);

  // Toon een bevestiging (kan ook via een alert of andere manier)
  alert("Discord username copied: nootieboy0512");
}
