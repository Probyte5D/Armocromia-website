$(document).ready(function () {
    function selezionaValore(classe, inputId) {
      $(classe).click(function () {
        $(classe).parent().removeClass("selected");
        $(this).parent().addClass("selected");
        $(inputId).val($(this).attr("data-image"));
      });
    }
  
    selezionaValore(".selectCapelliValue", "#capelli");
    selezionaValore(".selectOcchiValue", "#occhi");
    selezionaValore(".selectPelleValue", "#pelle");
  
    $("#armocromiaTest").submit(function (e) {
      e.preventDefault();
  
      const capelli = $("#capelli").val();
      const occhi = $("#occhi").val();
      const pelle = $("#pelle").val();
  
      if (!capelli || !occhi || !pelle) {
        // Mostra la modale personalizzata se uno dei campi è vuoto
        const modal = new bootstrap.Modal(document.getElementById('erroreModal'));
        modal.show();
        return;
      }
  
      const capelliColori = {
        "1": "Neri",
        "2": "Castano Scuro",
        "3": "Castano Medio"
      };
  
      const occhiColori = {
        "1": "Castani",
        "2": "Verdi",
        "3": "Azzurri"
      };
  
      const pelleColori = {
        "1": "Chiara",
        "2": "Scura",
        "3": "Media"
      };
  
      const coloreCapelli = capelliColori[capelli];
      const coloreOcchi = occhiColori[occhi];
      const colorePelle = pelleColori[pelle];
  
      let stagione = "Sconosciuta";
  
      if (capelli === "1") {
        if (occhi === "1") stagione = "Inverno";
        else if (occhi === "2") stagione = "Inverno Intenso";
        else stagione = "Inverno Chiaro";
      } else if (capelli === "2") {
        if (occhi === "1") stagione = "Autunno";
        else if (occhi === "2") stagione = "Estate";
        else stagione = "Autunno Chiaro";
      } else if (capelli === "3") {
        stagione = "Primavera";
      }
  
      $("#coloreCapelli").text(`Capelli: ${coloreCapelli}`);
      $("#coloreOcchi").text(`Occhi: ${coloreOcchi}`);
      $("#colorePelle").text(`Pelle: ${colorePelle}`);
      $("#stagione").text(`La tua stagione è: ${stagione}`);
  
      $("#risultato").removeClass("hidden").addClass("visible");
    });
  });

  
  $("#armocromiaTest").submit(function (e) {
  e.preventDefault();

  const capelli = $("#capelli").val();
  const occhi = $("#occhi").val();
  const pelle = $("#pelle").val();

  if (!capelli || !occhi || !pelle) {
    const modal = new bootstrap.Modal(document.getElementById('erroreModal'));
    modal.show();
    return;
  }

  const capelliColori = {
    "1": "Neri",
    "2": "Castano Scuro",
    "3": "Castano Medio"
  };

  const occhiColori = {
    "1": "Castani",
    "2": "Verdi",
    "3": "Azzurri"
  };

  const pelleColori = {
    "1": "Chiara",
    "2": "Scura",
    "3": "Media"
  };

  const coloreCapelli = capelliColori[capelli];
  const coloreOcchi = occhiColori[occhi];
  const colorePelle = pelleColori[pelle];

  let stagione = "Sconosciuta";

  if (capelli === "1") {
    if (occhi === "1") stagione = "Inverno";
    else if (occhi === "2") stagione = "Inverno Intenso";
    else stagione = "Inverno Chiaro";
  } else if (capelli === "2") {
    if (occhi === "1") stagione = "Autunno";
    else if (occhi === "2") stagione = "Estate";
    else stagione = "Autunno Chiaro";
  } else if (capelli === "3") {
    stagione = "Primavera";
  }

  // Aggiorna il contenuto
  $("#coloreCapelli").text(`Capelli: ${coloreCapelli}`);
  $("#coloreOcchi").text(`Occhi: ${coloreOcchi}`);
  $("#colorePelle").text(`Pelle: ${colorePelle}`);
  $("#stagione").text(`La tua stagione è: ${stagione}`);

  // Mostra il risultato
  $("#risultato").addClass("visible");
});
