var time;
var stop = document.getElementById('stopwatch')
function increaseTime() {
  time = time + 0.01
  stop.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
}

function start() {
  var startWatch = setInterval(function() { increaseTime() }, 10)
}

function stopWatch() {
  clearInterval(startWatch)
}
