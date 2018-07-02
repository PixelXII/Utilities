var time = 0;
var startWatch;
var stop = document.getElementById('stopwatch')
stop.style.fontSize = '24px';
function increaseTime() {
  time = time + 0.1
  document.body.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
  stop.innerHTML = time
}

function start() {
  startWatch = setInterval(function() { increaseTime() }, 10)
}

function stopWatch() {
  clearInterval(startWatch)
}
