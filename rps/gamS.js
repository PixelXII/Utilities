var stuff = document.getElementById('stuff');
function setO() {
  stuff.innerText = doG();
  console.log(doG())
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
    return 'You won ' + Math.ceil(noo) + ' tokens!';
  } else {
    return 'You lost! ' + Math.ceil(noo/2) + ' tokens have been taken out of your account.';
  }
  setO()
}
