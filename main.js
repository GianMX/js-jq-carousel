$(document).ready(
  function() {
    $(".prev").click(
      function () {
        clickPrev();
      }
    );

    $(".next").click(
      function () {
        clickNext();
      }
    );
  }
);
// CREO FUNZIONE PER PASSARE ALL'IMMAGINE SUCCESSIVA
function clickNext() {
  var currentImage = $('.images img.active');
  var currentSpot = $('.nav i.active');

  currentImage.removeClass('active');
  currentSpot.removeClass('active');

  if (currentImage.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  } else {
    currentImage.next('img').addClass('active');
    currentSpot.next('i').addClass('active');
  }
}
// CREO FUNZIONE PER PASSARE ALL'IMMAGINE PRECEDENTE
function clickPrev() {
  var currentImage = $('.images img.active');
  var currentSpot = $('.nav i.active');

  currentImage.removeClass('active');
  currentSpot.removeClass('active');

  if (currentImage.hasClass('first')){
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  } else {
    currentImage.prev('img').addClass('active');
    currentSpot.prev('i').addClass('active');
  }
}
