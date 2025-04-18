
    // Inizializza carousel
    const myCarousel = document.querySelector('#carouselExample');
    if (myCarousel) {
      new bootstrap.Carousel(myCarousel);
    }
  
    // Clicca su colore per copiarlo
    document.querySelectorAll('.color').forEach(el => {
      el.addEventListener('click', () => {
        // Copia il colore negli appunti
        navigator.clipboard.writeText(el.style.backgroundColor);
        
        // Mostra il toast per confermare la copia
        const toast = new bootstrap.Toast(document.getElementById('copyToast'));
        toast.show();
  
        // Aggiungi la classe 'selected' per effetto visivo
        el.classList.add('selected');
  
        // Rimuovi la classe 'selected' dopo 1 secondo per ripristinare lo stato iniziale
        setTimeout(() => el.classList.remove('selected'), 1000);
      });
    });
  
    const openBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeModalBtn');
  
    openBtn.onclick = () => modal.style.display = 'flex';
    closeBtn.onclick = () => modal.style.display = 'none';
  
    window.onclick = e => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    };

    function generaPalette() {
      const colore = document.getElementById("colorPicker").value.substring(1); // rimuove #
      const paletteDiv = document.getElementById("paletteResult");
    
      fetch(`https://www.thecolorapi.com/scheme?hex=${colore}&mode=analogic&count=5`)
        .then(res => res.json())
        .then(data => {
          paletteDiv.innerHTML = ""; // pulisce precedente
          data.colors.forEach(col => {
            const box = document.createElement("div");
            box.style.backgroundColor = col.hex.value;
            box.style.width = "80px";
            box.style.height = "80px";
            box.title = col.hex.value;
            box.className = "rounded border";
            paletteDiv.appendChild(box);
          });
        })
        .catch(err => {
          console.error("Errore API:", err);
          paletteDiv.innerHTML = "<p>Errore nel recupero palette</p>";
        });
    }
    
    