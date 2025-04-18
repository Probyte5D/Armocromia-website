function generaColore() {
  const lettere = "0123456789ABCDEF";
  let colore = "#";
  for (let i = 0; i < 6; i++) {
    colore += lettere[Math.floor(Math.random() * 16)];
  }
  return colore;
}

function cambiaColore() {
  const nuovoColore = generaColore();
  document.body.style.backgroundColor = nuovoColore;
  document.getElementById("colorCode").textContent = nuovoColore;
}
