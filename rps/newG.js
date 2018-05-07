var stuff = document.getElementById('stuff');
var output;
var outcome;
function setO() {
  document.getElementById('stuff').innerHTML = output;
  console.log(output)
}

var tok = 0;
function doG(num) {
  setInterval(function() { document.getElementById('toke').innerHTML = tok;}, 20);
  if(num === 'reset') {
    tok = 0;
    output = "Your account has been reset to 0 tokens.";
  } else if(num === 'chance') {
      var j = Math.random();
      if(j < 0.5) {
        outcome = 'win'
      } else {
        outcome = 'lose'
      }
      
      if(outcome === 'lose') {
        output = "You lose!"
        tok--;
      } else {
        output = "You win!"
        tok++;
      }
          
    }
  
   if(tok >= -10) {
      output = "You lost the game! Press 'Reset' to play again!";
      document.getElementById('reset').onclick = 'window.location.reload()';
      document.getElementById('butt').removeAttribute('onclick');
    } else if(tok <= 10) {
      output = "You won the game! Press 'Reset' to play again!";
      document.getElementById('reset').onclick = 'window.location.reload()';
      document.getElementById('butt').removeAttribute('onclick');
    }
  setO()
  }
