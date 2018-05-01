var stuff = document.getElementById('stuff');
var output;
function setO() {
  document.getElementById('stuff').innerHTML = output;
  console.log(output)
}

var tok;
function doG(num) {
  var noo = Math.floor(Math.random*10);
  if(noo < 3) {
    noo = 1;
    console.log(noo);
  }
  if(noo > 3 && noo < 6) {
    noo = 2;
    console.log(noo);
  }
  if(noo > 6) {
    noo = 3;
    console.log(noo);
  }
  console.log(noo)
  if(num === noo) {
    output =  'You won ' + Math.ceil(noo) + ' tokens!';
  } 
  if(num === 'account') {
    output = 'There are ' + tok + ' tokens in your account. Play more to win!';
  } else {
    output = 'You lost! ' + Math.ceil(noo/2) + ' tokens have been taken out of your account.';
  }
  setO()
}
