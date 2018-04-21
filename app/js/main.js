import '../sass/main.sass';
import '../libs/bootstrap-clockpicker.min.css';
import '../libs/bootstrap-clockpicker.min';
import '../libs/jquery-clockpicker.min.css';
import '../libs/jquery-clockpicker.min';
import '../libs/datepicker.min.css';
import '../libs/datepicker.min';

// Date and Time pikers
$('.clockpicker').clockpicker({
  placement: 'top',
  align: 'left',
});
$('.datepicker-here').datepicker();

// Navigation
const hamb = $('.hamburgerBox');
const height = $('.headerNavBoxTop').height();

hamb.click(() => {
  $('body').toggleClass('hidden');
  if (Number(window.pageYOffset) < Number(height)) { // если высота navbara меньше скролла
    $('.hamburger').toggleClass('active-menu');
    $('.nav-container').toggleClass('active-hamburger');
    $('.headerNavBoxTop').css({ position: 'relative' });
    if ($('.nav-container').hasClass('active-hamburger')) {
      $('.headerNavBoxTop').animate({ top: 0 }, 400);
      $('.headerNavBox').animate({ top: 0 }, 400);
    }
    $('.nav-box').slideToggle('ease-in-out');
  } else { // else false
    $('.hamburger').toggleClass('active-menu');
    if ($('.nav-container').hasClass('active-hamburger')) {
      $('.headerNavBoxTop').animate({ top: -height }, 400);
      $('.headerNavBox').animate({ top: 0 }, 400);
    } else {
      $('.headerNavBoxTop').css({
        position: 'fixed',
        left: 0,
        right: 0,
        zIndex: 999,
        padding: '0 15px',
      });
      $('.headerNavBoxTop').animate({ top: 0 }, 400);
      $('.headerNavBox').animate({ top: height + 1 }, 400);
    }
    $('.nav-container').toggleClass('active-hamburger');
    $('.nav-box').slideToggle('ease-in-out');
  }
});

$('.nav-item').click(() => { // click nav-item in mobile
  if (window.matchMedia('(max-width: 992px)').matches) {
    $('body').toggleClass('hidden');
    $('.hamburger').toggleClass('active-menu');
    $('.nav-container').toggleClass('active-hamburger');
    $('.nav-box').slideToggle('ease-in-out');
  }
});

window.onscroll = function () { // hide headLogo
  if (height <= window.pageYOffset + 2) {
    $('.headerNavBox').addClass('fixedNav');
    $('.nav-container').css({ paddingBottom: 50 });
    $('.headerNavBoxTop').stop().animate({ top: -height }, 400);
    $('.headerNavBoxTop').css({ position: 'relative' });
  } else {
    $('.headerNavBoxTop').stop().animate({ top: 0 }, 400);
    $('.headerNavBox').removeClass('fixedNav');
    $('.nav-container').css({ paddingBottom: 0 });
  }
};

// hideContent
const social = {
  button: $('.hideButton'),
  content: $('.hideSection'),
  textOne: 'Показать',
  textTwo: 'Свернуть',
};
const licence = {
  button: $('.showDop'),
  content: $('.hideLicence'),
  textOne: 'Показать больше',
  textTwo: 'Скрыть',
};
function hideContents({
  button, content, textOne, textTwo,
}) {
  content.slideToggle('hideCont');
  if (!content.hasClass('hide')) {
    content.addClass('hide');
    button.html(textOne);
  } else {
    content.removeClass('hide');
    button.html(textTwo);
  }
}
$('.showDop').click(() => { hideContents(licence); });
$('.hideButton').click(() => { hideContents(social); });

