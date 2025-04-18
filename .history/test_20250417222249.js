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

    // Calcolo della stagione (logica aggiornata)
    let stagione = "Sconosciuta";

    // Logica per determinare la stagione
    if (capelli == "1" && occhi == "1" && pelle == "1") {
        stagione = "Inverno";
    } else if (capelli == "2" && occhi == "2" && pelle == "2") {
        stagione = "Autunno";
    } else if (capelli == "3" && occhi == "3" && pelle == "3") {
        stagione = "Primavera";
    } else if (capelli == "2" && occhi == "3" && pelle == "1") {
        stagione = "Estate";
    }

    // Mostra i risultati
    $("#coloreCapelli").text(`Capelli: ${capelli == "1" ? 'Neri' : capelli == "2" ? 'Castano Scuro' : 'Castano Medio'}`);
    $("#coloreOcchi").text(`Occhi: ${occhi == "1" ? 'Castani' : occhi == "2" ? 'Verdi' : 'Azzurri'}`);
    $("#colorePelle").text(`Pelle: ${pelle == "1" ? 'Chiara' : pelle == "2" ? 'Scura' : 'Media'}`);
    $("#stagione").text(`La tua stagione è: ${stagione}`);

    // Mostra il div del risultato
    $("#risultato").removeClass("hidden");
  });
});
