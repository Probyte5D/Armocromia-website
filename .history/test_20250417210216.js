// Funzione per gestire la selezione del colore dei capelli
function handleOptionSelection(event) {
  const selectedElement = event.currentTarget;
  const selectedValue = selectedElement.getAttribute('data-value');
  const selectedColor = selectedElement.querySelector('img').alt;  // Otteniamo il nome del colore dall'alt della immagine
  
  // Mostra il colore selezionato nella console
  console.log(`Hai selezionato il colore: ${selectedColor}`);
  
  // Mostra il risultato nella pagina
  document.getElementById('coloreCapelli').textContent = selectedColor;
  
  // Mostra il div del risultato
  document.getElementById('risultato').classList.remove('hidden');

  // Aggiungi la classe 'selected' per il bordo rosso
  document.querySelectorAll('.color-option').forEach(option => {
    option.classList.remove('selected');  // Rimuovi il bordo rosso da tutte le opzioni
  });

  // Aggiungi il bordo rosso alla selezione
  selectedElement.classList.add('selected');
}

// Aggiungi l'evento di clic su ogni opzione (div)
document.querySelectorAll('.color-option').forEach(option => {
  option.addEventListener('click', handleOptionSelection);
});

// Funzione per inviare il modulo
document.getElementById('armocromiaTest').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Modulo inviato!');
});
