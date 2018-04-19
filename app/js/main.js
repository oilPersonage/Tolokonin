import '../sass/main.sass';
import '../libs/bootstrap-clockpicker.min.css';
import '../libs/bootstrap-clockpicker.min';
import '../libs/jquery-clockpicker.min.css';
import '../libs/jquery-clockpicker.min';
import '../libs/datepicker.min.css';
import '../libs/datepicker.min';

$('.clockpicker').clockpicker({
  placement: 'top',
  align: 'left',
});
$('.datepicker-here').datepicker();


const box = $('.headerNavBoxTop');
const hamb = $('.hamburgerBox');
const height = $('.headerNavBoxTop').height();

hamb.click(() => {
  if (Number(window.pageYOffset) < Number(height)) {
    console.log(1);
    $('.hamburger').toggleClass('active-menu');
    $('.nav-container').toggleClass('active-hamburger');
    $('.nav-box').slideToggle('ease-in-out');
  } else {
    $('.hamburger').toggleClass('active-menu');
    $('.nav-container').toggleClass('active-hamburger');
    $('.nav-box').slideToggle('ease-in-out');
  }
});

window.onscroll = function () {
  if (height <= window.pageYOffset + 2) {
    $('.headerNavBox').addClass('fixedNav');
    $('.nav-container').css({ paddingBottom: 50 });
  } else {
    $('.headerNavBox').removeClass('fixedNav');
    $('.nav-container').css({ paddingBottom: 0 });
  }
};

