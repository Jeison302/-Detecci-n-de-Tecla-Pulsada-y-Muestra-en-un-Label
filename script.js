// key.js
document.addEventListener('keydown', function(event) {
  const keyLabel = document.getElementById('keyValue');
  keyLabel.textContent = event.key === ' ' ? 'Espacio' : event.key;
});

