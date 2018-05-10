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
console.log(height)
// category
const banner = $('.banner');
const subsBox = $('.subsBox');

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
      $('.headerNavBoxTop').animate({ top: -height - 2 }, 400);
      $('.headerNavBox').animate({ top: 0 }, 400);
    } else {
      $('.headerNavBoxTop').css({
        position: 'fixed',
        left: 0,
        right: 0,
        zIndex: 999,
      });
      $('.headerNavBoxTop').animate({ top: 0 }, 400);
      $('.headerNavBox').animate({ top: height - 1 }, 400);
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

const scrollHeight = document.documentElement.offsetHeight;

const heightBottom = $('.hideSection').height() + $('footer').height();

const widthSubs = subsBox.width();

window.onscroll = function () {
  // category news
  if (!window.matchMedia('(max-width: 992px)').matches) {
    if (subsBox.length !== 0) {
      console.log(subsBox.length !== 0, subsBox.length);
      const h = scrollHeight - heightBottom - 190;
      // console.log(window.pageYOffset + subsBox.height() + 110, h)
      if (window.pageYOffset + subsBox.height() + 80 > (h)) {
        subsBox.addClass('absoluteCategory');
        subsBox.css({ width: widthSubs });
        subsBox.removeClass('fixedCategory');
      } else if (window.pageYOffset > banner.offset().top + banner.height()) {
        if (subsBox !== undefined) {
          subsBox.removeClass('absoluteCategory');
          subsBox.addClass('fixedCategory');
        }
      } else if (subsBox !== undefined) {
        subsBox.removeClass('fixedCategory');
      }
    }
  }

  // mobile menu

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
$('.showDop').click((e) => {
  e.preventDefault();
  hideContents(licence);
});
$('.hideButton').click((e) => {
  e.preventDefault();
  hideContents(social);
});

// width Seminar Card

// const Box = $('.cardSeminar');
const cardArr = $('.currentSeminar > .cardBox');
const oldArr = $('.oldSeminar > .cardBox');

function WidthCard(arr) {
  if (arr.length === 1) {
    arr[0].parentNode.style.justifyContent = 'center';
    arr[0].style.maxWidth = 'calc(50% - 30px)';
  } else if (arr.length < 3) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.maxWidth = 'calc(50% - 30px)';
    }
  }
}
WidthCard(cardArr);
WidthCard(oldArr);

// show oldSeminar
function cloneElem() {
  if ($('.showSeminar').hasClass('hide')) {
    for (let i = 0; i <= 1; i++) {
      $('.exampleClone').clone().appendTo('.oldSeminar');
    }
    $('.showSeminar').html('Скрыть');
  } else {
    const arr = $('.exampleClone');
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i].parentNode.removeChild(arr[i]);
      $('.showSeminar').html('Показать больше');
    }
  }
  $('.showSeminar').toggleClass('hide');
}
$('.showSeminar').click(() => {
  cloneElem();
});

