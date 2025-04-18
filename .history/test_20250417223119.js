$(document).ready(function () {
  // Gestione clic per la selezione dei capelli
  $(".selectCapelliValue").click(function () {
      $(".selectCapelliValue").parent().removeClass("selected");
      $(this).parent().addClass("selected");
      $("#capelli").val($(this).attr("data-image"));
  });

  // Gestione clic per la selezione degli occhi
  $(".selectOcchiValue").click(function () {
      $(".selectOcchiValue").parent().removeClass("selected");
      $(this).parent().addClass("selected");
      $("#occhi").val($(this).attr("data-image"));
  });

  // Gestione clic per la selezione della pelle
  $(".selectPelleValue").click(function () {
      $(".selectPelleValue").parent().removeClass("selected");
      $(this).parent().addClass("selected");
      $("#pelle").val($(this).attr("data-image"));
  });

  // Funzione per inviare il modulo e mostrare il risultato
  $("#armocromiaTest").submit(function (e) {
    e.preventDefault();

    // Prendi i valori selezionati
    const capelli = $("#capelli").val();
    const occhi = $("#occhi").val();
    const pelle = $("#pelle").val();

    // Mappa per tradurre il valore numerico nei nomi dei colori
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

    // Assegna i valori dai mapping
    const coloreCapelli = capelliColori[capelli];
    const coloreOcchi = occhiColori[occhi];
    const colorePelle = pelleColori[pelle];

    // Logica per determinare la stagione
    let stagione = "Sconosciuta";

    // Combinazioni per la stagione (tutte le combinazioni possibili)
    if (capelli == "1" && occhi == "1" && pelle == "1") {
        stagione = "Inverno";
    } else if (capelli == "1" && occhi == "1" && pelle == "2") {
        stagione = "Inverno Scuro";
    } else if (capelli == "1" && occhi == "1" && pelle == "3") {
        stagione = "Inverno Chiaro";
    } else if (capelli == "1" && occhi == "2" && pelle == "1") {
        stagione = "Inverno Intenso";
    } else if (capelli == "1" && occhi == "2" && pelle == "2") {
        stagione = "Inverno Scuro";
    } else if (capelli == "1" && occhi == "2" && pelle == "3") {
        stagione = "Inverno Chiaro";
    } else if (capelli == "1" && occhi == "3" && pelle == "1") {
        stagione = "Inverno Chiaro";
    } else if (capelli == "1" && occhi == "3" && pelle == "2") {
        stagione = "Inverno Scuro";
    } else if (capelli == "1" && occhi == "3" && pelle == "3") {
        stagione = "Inverno Intenso";
    
    // CASTANO SCURO
    } else if (capelli == "2" && occhi == "1" && pelle == "1") {
        stagione = "Autunno";
    } else if (capelli == "2" && occhi == "1" && pelle == "2") {
        stagione = "Autunno Scuro";
    } else if (capelli == "2" && occhi == "1" && pelle == "3") {
        stagione = "Autunno Chiaro";
    } else if (capelli == "2" && occhi == "2" && pelle == "1") {
        stagione = "Estate";
    } else if (capelli == "2" && occhi == "2" && pelle == "2") {
        stagione = "Autunno";
    } else if (capelli == "2" && occhi == "2" && pelle == "3") {
        stagione = "Estate";
    } else if (capelli == "2" && occhi == "3" && pelle == "1") {
        stagione = "Autunno Chiaro";
    } else if (capelli == "2" && occhi == "3" && pelle == "2") {
        stagione = "Autunno Scuro";
    } else if (capelli == "2" && occhi == "3" && pelle == "3") {
        stagione = "Autunno";

    // CASTANO MEDIO
    } else if (capelli == "3" && occhi == "1" && pelle == "1") {
        stagione = "Primavera";
    } else if (capelli == "3" && occhi == "1" && pelle == "2") {
        stagione = "Primavera Chiara";
    } else if (capelli == "3" && occhi == "1" && pelle == "3") {
        stagione = "Primavera";
    } else if (capelli == "3" && occhi == "2" && pelle == "1") {
        stagione = "Primavera";
    } else if (capelli == "3" && occhi == "2" && pelle == "2") {
        stagione = "Primavera";
    } else if (capelli == "3" && occhi == "2" && pelle == "3") {
        stagione = "Primavera Chiara";
    } else if (capelli == "3" && occhi == "3" && pelle == "1") {
        stagione = "Primavera Chiara";
    } else if (capelli == "3" && occhi == "3" && pelle == "2") {
        stagione = "Primavera";
    } else if (capelli == "3" && occhi == "3" && pelle == "3") {
        stagione = "Primavera Chiara";

    // Estati
    } else if (capelli == "2" && occhi == "2" && pelle == "3") {
        stagione = "Estate";
    } else if (capelli == "1" && occhi == "2" && pelle == "3") {
        stagione = "Estate";
    } else if (capelli == "2" && occhi == "3" && pelle == "3") {
        stagione = "Estate";

    }

    // Mostra i risultati
    $("#coloreCapelli").text(`Capelli: ${coloreCapelli}`);
    $("#coloreOcchi").text(`Occhi: ${coloreOcchi}`);
    $("#colorePelle").text(`Pelle: ${colorePelle}`);
    $("#stagione").text(`La tua stagione è: ${stagione}`);

    // Mostra il div del risultato
    $("#risultato").removeClass("hidden");
      // Mostra il div con il risultato
      $("#risultato").addClass("visible"); // Aggiungi la classe per renderlo visibile
  });
});
