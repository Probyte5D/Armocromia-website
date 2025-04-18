
const options = document.querySelectorAll('.color-option');
const input = document.getElementById('capelli');
const risultato = document.getElementById('risultato');
const coloreCapelli = document.getElementById('coloreCapelli');

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');
    input.value = option.dataset.image;
  });
});

document.getElementById('armocromiaTest').addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value) {
    coloreCapelli.textContent = "Hai scelto il colore numero: " + input.value;
    risultato.style.display = 'block';
  } else {
    alert("Per favore seleziona un'immagine prima di continuare.");
  }
});
