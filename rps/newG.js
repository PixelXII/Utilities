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
    if(num =! null) {
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
  console.log(tok);
  setO()
}