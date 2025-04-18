// Funzione per gestire la selezione del colore dei capelli
function handleOptionSelection(event) {
  const selectedElement = event.currentTarget;
  const selectedColor = selectedElement.getAttribute('data-color');
  
  // Mostra il colore selezionato nella console
  console.log(`Hai selezionato il colore: ${selectedColor}`);
  
  // Mostra il risultato nella pagina
  document.getElementById('coloreCapelli').textContent = selectedColor;
  
  // Mostra il div del risultato
  document.getElementById('risultato').classList.remove('hidden');
}

// Aggiungi l'evento di clic su ogni opzione (radio button)
document.querySelectorAll('input[type="radio"]').forEach(option => {
  option.addEventListener('change', handleOptionSelection);
});

// Funzione per inviare il modulo
document.getElementById('armocromiaTest').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Modulo inviato!');
});
