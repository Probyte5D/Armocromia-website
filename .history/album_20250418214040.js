
    const API_KEY = '1J5XZG6HEjef4TKrOiBtmHWoMJVdLRUIxplL9GJzFHBeI64zgRPny53m';
    const query = 'fashion look';  // Modifica la query per altre immagini

    // Carica le immagini
    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=50`, {
      headers: { Authorization: API_KEY }
    })
    .then(r => r.json())
    .then(data => {
      const row = document.getElementById('lookAlbum');
      if (data && data.photos) {
        data.photos.forEach(photo => {
          const col = document.createElement('div');
          col.className = 'col-6 col-md-4';
          col.innerHTML = `
            <img src="${photo.src.medium}" class="img-fluid rounded shadow-sm" alt="${photo.photographer}" title="Ph: ${photo.photographer}">
          `;
          row.appendChild(col);
        });
      } else {
        row.innerHTML = '<p class="text-danger text-center">Nessuna immagine trovata per questa ricerca.</p>';
      }
    })
    .catch(err => {
      console.error(err);
      const row = document.getElementById('lookAlbum');
      row.innerHTML = '<p class="text-danger text-center">Errore nel caricamento delle immagini.</p>';
    });

  
