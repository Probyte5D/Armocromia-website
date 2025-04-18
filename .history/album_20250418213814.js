document.querySelectorAll('.apri-album').forEach(btn => {
  btn.addEventListener('click', () => {
    const row = document.getElementById('lookAlbum');
    row.innerHTML = '<p class="text-center">Caricamento immagini...</p>';

    const API_KEY = '1J5XZG6HEjef4TKrOiBtmHWoMJVdLRUIxplL9GJzFHBeI64zgRPny53m';
    const query = 'fashion look'; // Puoi anche cambiare la query in base al prodotto

    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15`, {
      headers: { Authorization: API_KEY }
    })
    .then(r => r.json())
    .then(data => {
      row.innerHTML = ''; // Pulisce il contenuto precedente

      // Filtra le immagini per orientamento verticale (altezza > larghezza)
      const verticalImages = data.photos.filter(photo => photo.height > photo.width);

      // Aggiungi solo immagini verticali al layout
      verticalImages.forEach(photo => {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-4'; // Puoi cambiare la larghezza delle colonne in base alle tue preferenze
        col.innerHTML = `
          <div class="album-item">
            <img src="${photo.src.medium}" class="img-fluid rounded shadow-sm" alt="${photo.photographer}" title="Ph: ${photo.photographer}">
            <div class="caption">${photo.photographer}</div>
          </div>
        `;
        row.appendChild(col);
      });

      // Apri la modale usando il metodo di Bootstrap
      const modal = new bootstrap.Modal(document.getElementById('albumModal'));
      modal.show();
    })
    .catch(err => {
      row.innerHTML = '<p class="text-danger text-center">Errore nel caricamento delle immagini.</p>';
      console.error(err);
    });
  });
});
