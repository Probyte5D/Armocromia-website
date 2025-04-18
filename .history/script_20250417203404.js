let currentStep = 1;
let selectedOptions = {};

// Funzione per avanzare tra i passi
function goToNextStep(step) {
  document.getElementById('step' + currentStep).classList.remove('active');
  currentStep = step;
  document.getElementById('step' + currentStep).classList.add('active');
}

// Funzione per gestire la selezione delle opzioni
function handleOptionSelection(event) {
  const selectedElement = event.currentTarget;
  const step = selectedElement.parentElement.id; // Ottieni l'id del passo (es. 'step1')

  // Aggiungi o rimuovi la classe 'selected' per il contorno evidenziato
  selectedElement.classList.toggle('selected');
  
  // Memorizza la selezione per questo passo
  selectedOptions[step] = selectedElement.getAttribute('data-color');
}

// Aggiungi l'evento di clic su ogni opzione
document.querySelectorAll('.color-option').forEach(option => {
  option.addEventListener('click', handleOptionSelection);
});

// Funzione per concludere il test e mostrare i risultati
function submitForm() {
  if (!selectedOptions['step1'] || !selectedOptions['step2'] || !selectedOptions['step3']) {
    alert('Per favore, rispondi a tutte le domande.');
    return;
  }

  const pelle = selectedOptions['step2'];
  const sole = selectedOptions['step3'];
  const capelli = selectedOptions['step1'];

  let stagione = '';
  let palette = [];

  // Logica semplificata per determinare la stagione
  if (capelli === 'Neri' && pelle === 'Pelle Chiara' && sole === 'Si abbronza facilmente') {
    stagione = 'Primavera';
    palette = ['#FFD1DC', '#FFFACD', '#E0BBE4', '#FFB347', '#B5EAD7'];
  } else if (capelli === 'Castano Scuro' && pelle === 'Pelle Media' && sole === 'Si scotta facilmente') {
    stagione = 'Estate';
    palette = ['#BFD7EA', '#D6E2E9', '#A2D2FF', '#CDB4DB', '#E2F0CB'];
  } else {
    stagione = 'Autunno';
    palette = ['#D2691E', '#C3B091', '#A0522D', '#F4A460', '#B22222'];
  }
  
  
  document.getElementById('armocromiaTest').addEventListener('submit', function(e) {
    e.preventDefault();

    const selectedColor = document.querySelector('input[name="capelli"]:checked')?.value;

    if (!selectedColor) {
        alert('Per favore, seleziona un colore!');
        return;
    }

    alert(`Hai selezionato: ${selectedColor}`);
});


  document.getElementById('risultato').classList.remove('hidden');
}
