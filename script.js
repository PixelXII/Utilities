function absol() {
  var ad = document.getElementById('ad');
  var first = document.getElementById('first').value;
  var second = document.getElementById('second').value;
  var sed = document.getElementById('secondDiv');
  sed.style.display = "none";
  var tot = Math.abs(first);
  ad.innerText = tot;
}

function percent() {
         var ad = document.getElementById('ad');
         var first = document.getElementById('first').value;
         var second = document.getElementById('second').value;
         var sed = document.getElementById('secondDiv');
         sed.style.display = "none";
         if(first.includes('.')) { 
           var tot = first*100;
         } else {
           var tot = first;
         }
         ad.innerText = tot;
}
    

function exposeOptD() {
        var ad = document.getElementById('ad2');
        var s = ad.style.display;
        if(s = "none") {
          s = "block";
        } else {
          s = "none";
        }
        
}

function mod() {
        var ad = document.getElementById('ad');
        var first = document.getElementById('first').value;
        var second = document.getElementById('second').value;
        var tot = first % second;
        
        if(isNaN(tot) == true) {
                ad.innerText = "Please enter values.";
        } else {
                ad.innerText = first + " % " + second + " is " + tot;
        }
}

function random() {
        var ad = document.getElementById('ad');
        var tot = Math.floor( Math.random() * 10000);
        ad.innerText = tot;
}

function analyzePoints() {
        document.getElementById('points').submit; 
        document.getElementById('questions').submit;
        var points = document.getElementById('points').value;
        var questions = document.getElementById('questions').value;
        var ad = document.getElementById('ad');
    
        var total = Math.round(points/questions);
         
        if(total <= 0 || points <= 0 || questions <= 0) {
            ad.innerHTML = "Really?";
         }
        else {
                if(total > 1) {
            ad.innerHTML = "Each question in your assessment is about " + total + " points.";
                } 
                if(total === 1) {
                        ad.innerText = "Each question in your assessment is " + total + " point.";
                } else {
                        ad.innerText = "Each question in your assessment is " + total + " points.";
                        return false;
                }
            return false;
        }
    }

function doExp() {
        var first = document.getElementById('first').value;
        var second = document.getElementById('second').value;
        var ad = document.getElementById('ad');
        var tot = Math.pow(first, second);
        
        if(first === null) {
                first = 0;
        }
        if(second === null) {
                second = 0;
        }
        if(isNaN(tot) == true) {
                ad.innerText = "Please enter a value.";
        }
        
         if(tot === 0) {
                 ad.innerText = "Please enter values.";
                   }
        else {
            ad.innerText = first + " to the power of " + second + " is " + tot + ".";  
            return false;
        }
}

function findSum() {
      document.getElementById('first').submit;
      document.getElementById('second').submit;
      
      var first = document.getElementById('first').value;
      var second = document.getElementById('second').value;
      var ad = document.getElementById('ad');
      
      if(first.includes('.') || second.includes('.')) {
        var sum = parseFloat(first) + parseFloat(second);
      } else {
        var sum = parseInt(first,10) + parseInt(second,10);
      }
      
        if(first === null) {
                first = 0;
        }
        if(second === null) {
                second = 0;
        }
      if(isNaN(sum) == true) {
        ad.innerHTML = "Please enter a <i>numerical</i> value."
      } else {
        ad.innerHTML = "The sum of " + first + " and " + second + " is " + sum + ".";
      }
    }

 function remainder() {
      var first = document.getElementById('first').value;
      var second = document.getElementById('second').value;
      var ad = document.getElementById('ad');
      
      var quotient = first/second;
      var reman = first % second;
      var remainder = Math.floor(reman);
      var floored = Math.floor(quotient);
      
       if(isNaN(floored) == true || isNaN(remainder) == true) {
        ad.innerHTML = 'Please enter values in the two number fields.';
        setTimeout(function() {window.location.reload();}, 1000000);
    } else {
            if(remainder === 0) {
                    ad.innerText = 'The answer is ' + floored + '.';
            } else {
       ad.innerHTML = 'The answer is ' + floored + ' R' + remainder + '.';
            }
    }
   }
    
    function divide() {
      var first = document.getElementById('first').value;
      var second = document.getElementById('second').value;
      var ad = document.getElementById('ad');
      
      var quotient = first/second;
      
      if(isNaN(quotient) == true) {
        ad.innerHTML = 'Please enter values in the two number fields.';
        setTimeout(function() {window.location.reload();}, 1000000);
    } else {
       ad.innerHTML = 'The answer is ' + quotient + '.';
    }
  }
    
function multiply() {
  document.getElementById('first').submit;
  document.getElementById('second').submit;
  
  var first = document.getElementById('first').value;
  var second = document.getElementById('second').value;
  var ad = document.getElementById('ad');
  
  var product = first*second;
  var productR = Math.round(product);
  
  if(product == 0) {
    ad.innerHTML = "You can probably figure that out yourself.";
  } else {
  ad.innerHTML = 'The product is ' + productR + '.';
    return false;
    }
  }

 function cube() {
        document.getElementById('square').submit;
    
        var ad = document.getElementById('ad');
        var valve = document.getElementById('square').value;
    
        var tot = valve*valve*valve;
    if(valve === null) {
      ad.innerHTML = "Please enter a value.";
    } else {
       ad.innerHTML = valve + " cubed is " + tot + ".";
      }
    }
    
    function square() {
        document.getElementById('square').submit;
    
        var ad = document.getElementById('ad');
        var valve = document.getElementById('square').value;
    
        var tot = valve*valve;
       if(valve === null) {
      ad.innerHTML = "Please enter a value.";
    } else {
        ad.innerHTML = valve + " squared is " + tot + ".";
      }
    }

 function findDiff() {
    document.getElementById('first').submit;
    document.getElementById('second').submit;
    
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    var ad = document.getElementById('ad');
         
         if(first === null) {
                 ad.innerText = "That\'s not too hard.";
                 first = 0;
         }
         if(second === null) {
                 ad.innerText = "That\'s not too hard.";
                 second = 0;
         }
    
    var diff = first - second;
    
    console.log(diff);
    
    if(first == 0 || second == 0) {
      ad.innerHTML = 'Please enter values in the input fields.';
    } else {
      ad.innerHTML = first + " - " + second + " = " + diff + ".";
    }
 }

    
    
    
