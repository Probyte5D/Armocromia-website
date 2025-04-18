let currentStep = 1;

// Funzione per avanzare tra i passi
function goToNextStep(step) {
  // Rimuovi la classe active dal passo attuale
  document.getElementById('step' + currentStep).classList.remove('active');
  
  // Imposta il passo successivo come attivo
  currentStep = step;
  document.getElementById('step' + currentStep).classList.add('active');
}

// Funzione per concludere il questionario
function submitForm() {
  // Otteniamo i dati selezionati
  const pelle = document.querySelector('input[name="pelle"]:checked')?.value;
  const sole = document.querySelector('input[name="sole"]:checked')?.value;

  if (!pelle || !sole) {
    alert("Per favore, rispondi a tutte le domande.");
    return;
  }

  // Determinazione della stagione
  let stagione = '';
  let palette = [];

  if (pelle === 'chiara' && sole === 'abbronza') {
    stagione = 'Primavera';
    palette = ['#FFD1DC', '#FFFACD', '#E0BBE4', '#FFB347', '#B5EAD7'];
  } else if (pelle === 'media' && sole === 'scotta') {
    stagione = 'Estate';
    palette = ['#BFD7EA', '#D6E2E9', '#A2D2FF', '#CDB4DB', '#E2F0CB'];
  } else if (pelle === 'scura' && sole === 'abbronza') {
    stagione = 'Autunno';
    palette = ['#D2691E', '#C3B091', '#A0522D', '#F4A460', '#B22222'];
  } else {
    stagione = 'Inverno';
    palette = ['#000000', '#4169E1', '#8A2BE2', '#FF1493', '#00CED1'];
  }

  // Mostriamo i risultati
  document.getElementById('stagione').textContent = `La tua stagione è: ${stagione}`;
  const paletteContainer = document.getElementById('palette');
  paletteContainer.innerHTML = '';
  palette.forEach(color => {
    const div = document.createElement('div');
    div.className = 'color-box';
    div.style.backgroundColor = color;
    div.title = color;
    div.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      alert(`Colore ${color} copiato negli appunti!`);
    });
    paletteContainer.appendChild(div);
  });

  // Mostriamo la sezione dei risultati
  document.getElementById('risultato').classList.remove('hidden');
}
