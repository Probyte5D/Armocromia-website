document.getElementById('armocromiaTest').addEventListener('submit', function(e) {
  e.preventDefault();

  const capelli = document.querySelector('input[name="capelli"]:checked')?.value;
  const occhi = document.querySelector('input[name="occhi"]:checked')?.value;
  const pelle = document.querySelector('input[name="pelle"]:checked')?.value;

  if (!capelli || !occhi || !pelle) {
    alert('Per favore, rispondi a tutte le domande.');
    return;
  }

  let stagione = '';
  let palette = [];

  // Logica semplificata per determinare la stagione
  if (capelli === 'chiari' && occhi === 'chiari' && pelle === 'si_abbronza') {
    stagione = 'Primavera';
    palette = ['#FFD1DC', '#FFFACD', '#E0BBE4', '#FFB347', '#B5EAD7'];
  } else if (capelli === 'chiari' && occhi === 'chiari' && pelle === 'si_scotta') {
    stagione = 'Estate';
    palette = ['#BFD7EA', '#D6E2E9', '#A2D2FF', '#CDB4DB', '#E2F0CB'];
  } else if (capelli === 'scuri' && occhi === 'scuri' && pelle === 'si_abbronza') {
    stagione = 'Autunno';
    palette = ['#D2691E', '#C3B091', '#A0522D', '#F4A460', '#B22222'];
  } else {
    stagione = 'Inverno';
    palette = ['#000000', '#4169E1', '#8A2BE2', '#FF1493', '#00CED1'];
  }

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

  document.getElementById('risultato').classList.remove('hidden');
});



document.querySelectorAll(".color").forEach((div) => {
  div.style.backgroundColor = div.dataset.color;

  div.addEventListener("click", () => {
    const colorCode = div.dataset.color;
    navigator.clipboard.writeText(colorCode).then(() => {
      div.style.outline = "3px solid #222";
      setTimeout(() => div.style.outline = "none", 1000);
    });
  });
});
