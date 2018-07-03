var time = 0;
var startWatch;
var colours;
var stop = document.getElementById('stopwatch')
var start;
var stopWatch;
stop.style.display = "none"
setTimeout(function() { loadPage() }, 3000)

function loadPage() {
  stop.style.display = "block"
  document.getElementById('warning').style.display = "none"
 /* function increaseTime() {
    time = time + 0.1
    document.getElementById('stopText').innerHTML = Math.round(100*time)/100;
  }
  start = function() {
    startWatch = setInterval(function() { increaseTime() }, 100)
    colors = setInterval(function() { document.body.style.background = '#'+Math.floor(Math.random()*16777215).toString(16); }, 10)
  }
  stopWatch = function() {
    clearInterval(startWatch)
    clearInterval(colors)
  } */
  var seconds = new Date().getTime(), last = seconds,

intrvl = setInterval(function() {
    var now = new Date().getTime();

    if(now - last > 5){
        if(confirm("Delay registered, terminate?")){
            clearInterval(intrvl);
            return;
        }
    }

    last = now;
    document.getElementById('stopText').innerHTML = now - seconds;

}, 333);
}
