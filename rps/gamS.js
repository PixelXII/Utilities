var stuff = document.getElementById('stuff');
var output;
function setO() {
  stuff.innerText = output;
  console.log(output)
}

var doG = function(num) {
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
  
  if(num === noo) {
    output =  'You won ' + Math.ceil(noo) + ' tokens!';
  } else {
    output = 'You lost! ' + Math.ceil(noo/2) + ' tokens have been taken out of your account.';
  }
  setO()
}
