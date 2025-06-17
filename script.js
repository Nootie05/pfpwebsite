function copyDiscord() {
  const discordName = 'nootieboy0512';
  navigator.clipboard.writeText(discordName).then(() => {
    alert(`Username "${discordName}" copied! Add me on Discord.`);
  }, () => {
    alert('Could not copy username. Please copy manually: ' + discordName);
  });
}
