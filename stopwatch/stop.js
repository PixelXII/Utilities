var stop = document.getElementById('stopwatch')
var start, stopWatch, minutes = 0, time = 0, colors, startWatch, seconds = 0;
stop.style.display = "none"
setTimeout(function() { loadPage() }, 3000)

function loadPage() {
  stop.style.display = "block"
  document.getElementById('warning').style.display = "none"
  function increaseTime() {
    seconds++
    minutes = Math.floor(time / 60);
    seconds = time - minutes * 60;
    document.getElementById('stopText').innerHTML = minutes+':'+seconds
  }
  start = function() {
    startWatch = setInterval(function() { increaseTime() }, 1000)
    colors = setInterval(function() { document.body.style.background = '#'+Math.floor(Math.random()*16777215).toString(16); }, 10)
  }
  
  stopWatch = function() {
    clearInterval(startWatch)
    clearInterval(colors)
  } 
}
