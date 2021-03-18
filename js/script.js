// CREO UN ARRAY CHE CONTIENE LA LISTA DELLA SPESA
var listaSpesa = [
  'Spaghetti',
  'Uova',
  'Guanciale',
  'Pecorino Romano'
];

// CREO UNA FUNZIONE PER POTER AGGIUNGERE GLI OGGETTI ALLA LISTA TEMPLATE COSI' DA POTERLA RIUTILIZZARE
function aggiungi(oggetto){
  // SELEZIONO E CLONO IL TEMPLATE
  var cosaManca = $('.template li').clone();
  // AGGIUNGO LA LISTA DELLA SPESA AL TEMPLATE
  cosaManca.prepend(oggetto);
  // AGGIUNGO IL TEMPLATE CON LA LISTA DELLA SPESA ALLA LISTA PRESENTE NEL FILE HTML
  $('.todo-list').append(cosaManca);
}


// CICLO L'ARRAY CON LA LISTA DELLA SPESA
for(var i = 0; i < listaSpesa.length; i++){
  aggiungi(listaSpesa[i]);
}

// CREO UN FUNZIONE PER POTER AGGIUNGERE ALTRI OGGETTI ALLA LISTA DELLA SPESA
$('#aggiungi').keydown(
  function(e){
    if(e.which == 13){
      var testo = $(this).val();
      if(testo != ""){
        aggiungi(testo);
        // SVUOTO IL CAMPO INPUT
        $(this).val('');
      }
    }
  }
);

// CANCELLO GLI OGGETTI CHE NON SERVONO PIU' TRAMITE LA 'X'
$(document).on(
  "click",
  ".todo-list-elimina",
  function() {
    $(this).parent().remove();
});
