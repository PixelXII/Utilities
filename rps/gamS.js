var intro = document.getElementById('intro');
var first === "Welcome to Nine, the gambling game!";
var second === "Enter a number between 1 and 10 to begin!";
var rev = function() {
  if(intro.innerText === first) {
    return second;
  } 
  if(intro.innerText === second) {
    return first;
  } else {
    intro.innerHTML = "<h1>Uh oh! Something went wrong there. Reload and try again.</h1>";
  }
}

function reverseIntro() {
  do {
    setInterval(rev(), 5000);
  }
  while(1);
}
    
