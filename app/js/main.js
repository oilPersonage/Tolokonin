import '../sass/main.sass'
import '../libs/bootstrap-clockpicker.min.css'
import '../libs/bootstrap-clockpicker.min'
import '../libs/jquery-clockpicker.min.css'
import '../libs/jquery-clockpicker.min'
import '../libs/datepicker.min.css'
import '../libs/datepicker.min'

$('.clockpicker').clockpicker({
  placement: 'top',
  align: 'left',
});
$('.datepicker-here').datepicker()


if (module.hot) {
  module.hot.accept('./main.js', function() {
  console.log('Accepting the updated printMe module!');
  printMe();
  })
}