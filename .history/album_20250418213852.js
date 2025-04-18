fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15`, {
  headers: { Authorization: API_KEY }
})
.then(r => r.json())
.then(data => {
  console.log(data); // Aggiungi questo per vedere cosa ricevi come risposta
  row.innerHTML = ''; // Pulisce il contenuto precedente

  // Filtra le immagini per orientamento verticale
  const verticalImages = data.photos.filter(photo => photo.height > photo.width);

  console.log(verticalImages); // Aggiungi anche questo per vedere le immagini filtrate

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

  const modal = new bootstrap.Modal(document.getElementById('albumModal'));
  modal.show();
})
.catch(err => {
  row.innerHTML = '<p class="text-danger text-center">Errore nel caricamento delle immagini.</p>';
  console.error(err);
});
