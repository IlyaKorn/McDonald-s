const cocaColaCardText = $('.catalog__item--coca-cola').find('h3');
const bodyPage = $('body');
const popupWrapper = $('.popup__wrapper');
let windowSize = $(window).width();

$(document).ready(function() {
  $('.buy').on('click', function() {
    $('.popup').css('display', 'flex');
    bodyPage.css('position', 'fixed');

    $(document).on('keydown', function(e) {
      if (e.keyCode == 27)
        $('.popup').css('display', 'none');
        bodyPage.css('position', 'static');
    })

    popupWrapper.on('click', function() {
      $('.popup').css('display', 'none');
      bodyPage.css('position', 'static');
    })
  })

  function windowSize(){
    if ($(window).width() < '1440'){
      cocaColaCardText.text('Хорошая пара с Лате');
    } else {
      cocaColaCardText.text('Кока-Кола средняя');
    }
  }

  $(window).on('load resize', windowSize);
});


/*Slider*/
new Swiper('.image-slider', {

});