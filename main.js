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
    $('.nav i').removeClass('red');
    $('.nav i.first').addClass('red');

  } else {
    currentImage.next('img').addClass('active');
    currentSpot.next('i').addClass('active');
    currentSpot.next('i').addClass('red');
    currentSpot.prev('i').removeClass('red');

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
    $('.nav i').removeClass('red');
    $('.nav i.last').addClass('red');
  } else {
    currentImage.prev('img').addClass('active');
    currentSpot.prev('i').addClass('active');
    currentSpot.next('i').removeClass('red');
    currentSpot.prev('i').addClass('red');
  }
}
