import '../sass/main.sass'

if (module.hot) {
  module.hot.accept('./main.js', function() {
  console.log('Accepting the updated printMe module!');
  printMe();
  })
}