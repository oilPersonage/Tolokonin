import '../sass/main.sass';
import '../libs/bootstrap-clockpicker.min.css';
import '../libs/bootstrap-clockpicker.min';
import '../libs/jquery-clockpicker.min.css';
import '../libs/jquery-clockpicker.min';
import '../libs/datepicker.min.css';
import '../libs/datepicker.min';
import { TweenLite, TweenMax } from 'gsap'
// import '../libs/CSSPlugin.min'

$('.clockpicker').clockpicker({
  placement: 'top',
  align: 'left',
});
$('.datepicker-here').datepicker();

const header = $('header')
const hamb = $('.hamburgerBox');
const heightLogoBox = $('.headerNavBoxTop').height();
const iconHamb = $('.hamburger')
const menu = $('.nav-box')
const navContainer = $('.nav-container')
header.css({marginTop: heightLogoBox + 50,})
navContainer.css({height: heightLogoBox + 50})
const complete = () => {
  navContainer.toggleClass('active-hamburger')
}
hamb.click(() => {
  console.log(!navContainer.hasClass('active-hamburger'))
  if (heightLogoBox <= window.pageYOffset + 2) {
    console.log(1)
    if (!navContainer.hasClass('active-hamburger')) {
      TweenMax.to(navContainer, 1, {height: '100vh'});
      iconHamb.toggleClass('active-menu');
      menu.css({display: 'flex'})
      navContainer.toggleClass('active-hamburger');
    } else {
      TweenMax.to(navContainer, 1, {height: heightLogoBox + 50, onComplete: complete});
      iconHamb.toggleClass('active-menu');
    }
  } else {
    if (!navContainer.hasClass('active-hamburger')) {
      console.log("не эктив")
      TweenMax.to(navContainer, 1, {height: '100vh', top: heightLogoBox -2})
      iconHamb.toggleClass('active-menu');
      menu.css({display: 'flex'})
      navContainer.toggleClass('active-hamburger');
    } else {
      console.log("эктив")
      TweenMax.to(navContainer, 1, {height: heightLogoBox + 50, top: -heightLogoBox -2, onComplete: complete});
      iconHamb.toggleClass('active-menu');
    }
  }
});

const buttonHumb = $('.headerNavBox')
window.onscroll = function () {
  console.log(window.pageYOffset)
  if (1 < window.pageYOffset) {
    navContainer.css({ paddingBottom: 50 });
    TweenMax.to(navContainer, .3, {top: -heightLogoBox -2})
    TweenMax.to(header, .4, {marginTop: 140, ease:'Linear'})
  } else {
    TweenMax.to(header, .4, {marginTop: heightLogoBox + 45})
    TweenMax.to(navContainer, .4, {top: 0})
    buttonHumb.removeClass('fixedNav');
    navContainer.css({ paddingBottom: 0 });
  }
};

