$('.btn-close').click(function () {
   $('.mobile-menu').fadeOut();
});

$('.btn-burger').click(function () {
    $('.mobile-menu').fadeToggle();
});

$('[name="phone"]').mask('+7 (999) 999 99 99')