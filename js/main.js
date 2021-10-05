const cocaColaCardText = $('.catalog__item--coca-cola').find('h3');
let windowSize = $(window).width();

$(document).ready(function() {
  $('.buy').on('click', function() {
    $('.popup').css('display', 'flex');

    $(document).on('keydown', function(e) {
      if (e.keyCode == 27)
        $('.popup').css('display', 'none');
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