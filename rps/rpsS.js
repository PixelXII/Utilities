var output;
    var result;
    var arry;
    function outP() {
      document.getElementById('out').innerText = output;
    }
    var findC = function(choice) {
      var cChoice = null;
      var num = Math.random();
      if(num <= 0.3) {
        cChoice = 'rock';
      }
      if(num < 0.6 && num > 0.3) {
        cChoice = 'scissors';
      } else {
        cChoice = 'paper';
      }
      
      if(cChoice === choice) {
        output = "Tie! You both picked " + choice + ".";
      }
      if(cChoice === 'rock') {
        if(choice === 'scissors') {
          output = "You lose! The computer picked rock and you picked scissors."
        }
        if(choice === 'paper') {
            output = "You win! The computer picked rock and you picked paper.";
      }
      }
      if(cChoice === 'paper') {
        if(choice === 'scissors') {
          output = "You win! The computer picked paper and you picked scissors."
        }
        if(choice === 'rock') {
          output = "You lose! The computer picked paper and you picked rock."
        }
      }
      if(cChoice === 'scissors') {
        if(choice === 'rock') {
          output = "You win! The computer picked scissors and you picked rock.";
        }
        if(choice === 'paper') {
          output = "You lose! The computer picked scissors and you picked paper.";
        }
      }
      if(output.includes('You win!')) {
        result = 1;
      } 
      if(output.includes('Tie!')) {
        result = 0.5;
      } else {
        result = 0;
      }
      console.log(result);
      outP();
    }
