
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
      const colore = document.getElementById("colorPicker").value.substring(1);
      const paletteDiv = document.getElementById("paletteResult");
    
      fetch(`https://www.thecolorapi.com/scheme?hex=${colore}&mode=analogic&count=5`)
        .then(res => res.json())
        .then(data => {
          paletteDiv.innerHTML = "";
    
          data.colors.forEach(col => {
            const box = document.createElement("div");
            box.style.backgroundColor = col.hex.value;
            box.style.width = "80px";
            box.style.height = "80px";
            box.style.cursor = "pointer";
            box.className = "rounded border position-relative";
            
            // Tooltip personalizzato
            const tooltip = document.createElement("div");
            tooltip.innerText = `${col.name.value}\n${col.hex.value}`;
            tooltip.style.position = "absolute";
            tooltip.style.bottom = "100%";
            tooltip.style.left = "50%";
            tooltip.style.transform = "translateX(-50%)";
            tooltip.style.whiteSpace = "pre-line";
            tooltip.style.background = "rgba(0, 0, 0, 0.7)";
            tooltip.style.color = "#fff";
            tooltip.style.padding = "4px 8px";
            tooltip.style.borderRadius = "8px";
            tooltip.style.fontSize = "0.8rem";
            tooltip.style.opacity = 0;
            tooltip.style.transition = "opacity 0.3s";
            tooltip.style.pointerEvents = "none";
    
            box.addEventListener("mouseenter", () => {
              tooltip.style.opacity = 1;
            });
            box.addEventListener("mouseleave", () => {
              tooltip.style.opacity = 0;
            });
    
            box.appendChild(tooltip);
            paletteDiv.appendChild(box);
          });
        })
        .catch(err => {
          console.error("Errore API:", err);
          paletteDiv.innerHTML = "<p>Errore nel recupero palette</p>";
        });
    }
    