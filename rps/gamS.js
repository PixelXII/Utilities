var stuff = document.getElementById('stuff');
var output;

function setO() {
  document.getElementById('stuff').innerHTML = output;
  console.log(output)
}

var tok = 0;
function doG(num) {
  setInterval(function() { document.getElementById('toke').innerHTML = tok;}, 20);
  if(num === 'reset') {
      tok = 0;
  } else if(tok = 0) {
    output = 'You win!';
    tok++;
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
      output =  'You won!'
      tok++;
    } 
    if(num > noo || num < noo) {
      output = 'You lost!'
      tok--;
    } 
    setO()
    console.log(tok)
  }
}
