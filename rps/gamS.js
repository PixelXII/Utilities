var stuff = document.getElementById('stuff');
var output;
function setO() {
  document.getElementById('stuff').innerHTML = output;
  console.log(output)
}

var tok;
function doG(num) {
  var noo = Math.floor((Math.random() * 10) + 1);
  if(noo < 3) { 
    noo = 1;
  }
  if(noo > 3 && noo < 6) {
    noo = 2;
  }
  if(noo > 6) {
    noo = 3;
  }
  console.log(noo + ' is noo.');
  console.log(num + ' is num.');
  if(noo == num) {
    output =  'You won ' + Math.ceil(noo) + ' tokens!';
    tok = tok + Math.ceil(noo);
  } 
  if(num === 'account') {
    output = 'There are ' + tok + ' tokens in your account. Play more to win!';
  }
  if(num > noo || num < noo) {
    output = 'You lost! ' + Math.ceil(noo/2) + ' tokens have been taken out of your account.';
    tok = tok - Math.ceil(noo/2);
  } else {
    output = "You won " + Math.ceil(noo) + " tokens!";
    tok = tok + Math.ceil(noo);
  }
  setO()
}
