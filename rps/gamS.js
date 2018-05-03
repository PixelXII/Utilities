var stuff = document.getElementById('stuff');
var output;
function disAc() {
  setTimeout(function() {output = "There are " + tok + " tokens in your account.";}, 4000);
}

function setO() {
  document.getElementById('stuff').innerHTML = output;
  console.log(output)
}

var tok;
function doG(num) {
  if(num === 'account') {
    output = 'There are ' + tok + ' tokens in your account. Play more to win!';
  } else if(num === 'reset') {
    output = "Are you sure you want to reset your account? Press 'Reset' again to confirm!";
    if(num === 'reset') {
      output = "Your account has been reset."
      tok = 0;
    }
  } else {
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
    if(num > noo || num < noo) {
      output = 'You lost! ' + Math.ceil(noo/2) + ' tokens have been taken out of your account.';
      tok = tok - Math.ceil(noo/2);
    } else {
      output = "You won " + Math.ceil(noo) + " tokens!";
      tok = tok + Math.ceil(noo);
    }
    setO()
    disAc()
    console.log(tok)
  }
}
