fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=80`, {
  headers: { Authorization: API_KEY }
})
.then(r => r.json())
.then(data => {
  row.innerHTML = ''; // Pulisce il contenuto precedente

  // Filtro per le immagini verticali
  const verticalImages = data.photos.filter(photo => photo.height > photo.width);

  // Se non ci sono immagini verticali, mostriamo un messaggio di errore
  if (verticalImages.length === 0) {
    row.innerHTML = '<p class="text-danger text-center">Nessuna immagine verticale trovata.</p>';
    return;
  }

  // Aggiungi le immagini verticali nella galleria
  verticalImages.forEach(photo => {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4';
    col.innerHTML = `
      <div class="album-item">
        <img src="${photo.src.medium}" class="img-fluid rounded shadow-sm" alt="${photo.photographer}" title="Ph: ${photo.photographer}">
        <div class="caption">${photo.photographer}</div>
      </div>
    `;
    row.appendChild(col);
  });

  // Mostra il modal con le immagini
  const modal = new bootstrap.Modal(document.getElementById('albumModal'));
  modal.show();
})
.catch(err => {
  row.innerHTML = '<p class="text-danger text-center">Errore nel caricamento delle immagini.</p>';
  console.error(err);
});
