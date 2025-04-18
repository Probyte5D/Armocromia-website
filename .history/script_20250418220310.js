// Inizializza carousel
const myCarousel = document.querySelector('#carouselExample');
if (myCarousel) {
  new bootstrap.Carousel(myCarousel);
}

// Clicca su colore per copiarlo
document.querySelectorAll('.color').forEach(el => {
  el.addEventListener('click', () => {
    // Check if the background color exists
    console.log('Color clicked:', el.style.backgroundColor);

    if (el.style.backgroundColor) {
      // Copia il colore negli appunti
      navigator.clipboard.writeText(el.style.backgroundColor).then(() => {
        // Mostra il toast per confermare la copia
        const toast = new bootstrap.Toast(document.getElementById('copyToast'));
        toast.show();

        // Aggiungi la classe 'selected' per effetto visivo
        el.classList.add('selected');

        // Rimuovi la classe 'selected' dopo 1 secondo per ripristinare lo stato iniziale
        setTimeout(() => el.classList.remove('selected'), 1000);
      }).catch(err => {
        console.error('Errore nel copiare il colore:', err);
      });
    } else {
      console.error('Nessun colore di sfondo trovato per:', el);
    }
  });
});

// Funzione per generare palette
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
        box.className = "rounded border position-relative color";  // Add the 'color' class

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

document.addEventListener("DOMContentLoaded", () => {
  const generaBtn = document.getElementById("generaPaletteBtn");
  if (generaBtn) {
    generaBtn.addEventListener("click", generaPalette);
  }
});

// Aggiungi log per il caricamento prodotti
document.addEventListener('DOMContentLoaded', () => {
  const row = document.getElementById('products-row');
  fetch('https://fakestoreapi.com/products?limit=6')
    .then(res => res.json())
    .then(products => {
      products.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
          <div class="card border-0 shadow rounded-4 h-100">
            <img src="${p.image}" class="card-img-top rounded-top-4 img-fluid" alt="${p.title}">
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">${p.title}</h5>
              <p class="card-text text-muted small">${p.description.substring(0,60)}...</p>
              <p class="text-primary fw-semibold">€${p.price}</p>
              <a href="#" class="btn btn-outline-dark rounded-pill px-4">Acquista</a>
            </div>
          </div>`;
        row.appendChild(col);
      });
    })
    .catch(err => console.error('Errore caricamento prodotti:', err));
});
