var stop = document.getElementById('stopwatch')
var start, stopWatch, minutes = 0, time = 0, colors, hours = 0, startWatch, seconds = 0;
stop.style.display = "none"
setTimeout(function() { loadPage() }, 3000)

function loadPage() {
  stop.style.display = "block"
  document.getElementById('warning').style.display = "none"
  function increaseTime() {
    seconds++
    if(seconds >= 60) {
      seconds = 0
      minutes++
    } else if(minutes >= 60) {
      minutes = 0
      hours++
    } else if(hours === 24) {
      document.getElementById('stopText').innerHTML = "oh, why have you left me on this long!! my battery's almost dead!!"
    }
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
