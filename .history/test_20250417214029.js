$(document).ready(function () {
  // Gestione clic per la selezione dei capelli
  $(".selectCapelliValue").click(function () {
      $("#divStep1").find(".selectCapelliValue").removeClass("select");
      $(this).addClass("select");
      $("#capelli").val($(this).attr("data-image"));
  });

  // Gestione clic per la selezione degli occhi
  $(".selectOcchiValue").click(function () {
      $("#divStep1").find(".selectOcchiValue").removeClass("select");
      $(this).addClass("select");
      $("#occhi").val($(this).attr("data-image"));
  });

  // Gestione clic per la selezione della foto
  $(".selectFototipiValue").click(function () {
      $("#divStep1").find(".selectFototipiValue").removeClass("select");
      $(this).addClass("select");
      $("#fototipo").val($(this).attr("data-image"));
  });
});

// Funzione per validare il Primo Step
function valideStep1() {
  if ($("#capelli").val() !== '' && $("#occhi").val() !== '' && $("#fototipo").val() !== '') {
      $('#step1').hide();  // Nascondi il primo step
      $('#divStep2').show(); // Mostra il secondo step
  } else {
      alert("Attenzione devi selezionare le 3 opzioni!!");
  }
  return false;
}

// Funzione per validare il Secondo Step
function valideStep2() {
  if ($("#capelli").val() !== '' && $("#occhi").val() !== '' && $("#fototipo").val() !== '') {
      // Logica per la validazione del secondo step
  }
}