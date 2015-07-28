$('[data-toggle="popover"]').popover();

$('[data-toggle="tooltip"]').tooltip();

//efecto para el Modal
$('#miModal').modal('hide');
$('#idModal').on('click', animacionModal);
val=0;
function animacionModal () {
  $('.modal-content').css({'transform':'scale('+val+')'});
  val=val+0.2;
  if (val <= 1) {
    setTimeout('animacionModal()',40)
  }
  else{
    val=0;
  }
}

//barra de progreso
$('#aceptar').on('click',barraProgreso);
valor=0;

function barraProgreso () {
  $('.modal-content').hide();
  $('.modal-dialog').html('<div class="progress progress-striped active"> <div class="progress-bar" role="progress-bar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"><span class="sr-only"></span></div></div>');
  avanzandoBarra();
}

function avanzandoBarra () {
  valor=valor+10;
  $('.progress-bar').css({'width': valor+'%'});
  if (valor == "200") {
    $('#miModal').modal('hide');
    location.reload();
  }
  setTimeout('avanzandoBarra()',100);
}

$(function () {
    $(".custom-close").on('click', function() {
        $('#myModal').modal('hide');
    });
});