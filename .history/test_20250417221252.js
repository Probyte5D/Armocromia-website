$(document).ready(function () {
  // Gestione clic per la selezione dei capelli
  $(".selectCapelliValue").click(function () {
      // Rimuovi la classe 'selected' da tutte le immagini
      $(".selectCapelliValue").parent().removeClass("selected");
      
      // Aggiungi la classe 'selected' all'immagine cliccata
      $(this).parent().addClass("selected");

      // Aggiorna il valore nascosto del colore capelli
      $("#capelli").val($(this).attr("data-image"));

      // Mostra il risultato nella pagina
      const selectedColor = $(this).attr("data-image");
      $("#coloreCapelli").text("Hai selezionato il colore numero: " + selectedColor);
      $("#risultato").removeClass("hidden");
  });

  // Funzione per inviare il modulo
  $("#armocromiaTest").submit(function (e) {
    e.preventDefault();
    const selectedValue = $("#capelli").val();
    alert("Hai selezionato il colore con valore: " + selectedValue);
  });
});


$('.selectOcchiValue').on('click', function () {
  $('.selectOcchiValue').parent().removeClass('selected');
  $(this).parent().addClass('selected');
  $('#occhi').val($(this).attr('data-image'));
});
