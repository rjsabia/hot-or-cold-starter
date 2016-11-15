
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

var guess;
var secretNum;
var currentCount = 0;

randomNumber(secretNum);

getUserGuess();


//*****************************************************
function getUserGuess(){

document.getElementById("guessButton").addEventListener("click", function(){
  
  event.preventDefault();
  
  guess = document.getElementById("userGuess").value;

  parseInt(guess);

  checkGuess(guess);
});

}

//******************************************************
function checkGuess(checkNum){

  if(guess % 1 != 0){

    alert('Please input whole number');
  }
  else if( guess < 1 || guess > 100){

    alert('Please enter a number between 1 and 100');
  }
  else {

    runGame(guess);
  }

}

//****************************************************
function runGame(gameNum){
      
      if(secretNum === guess){
      
      document.getElementById("feedback").innerHTML = "You did it, you won! Hit the new game button to try again";

      guessCounter();

      guessPrint();
      
      } 
      else if(Math.abs(secretNum - guess) <= 10){
      
       document.getElementById("feedback").innerHTML = 'Smokin Hot!!!';

        guessCounter();

        guessPrint();

        // getUserGuess();
      
      } 
      else if(Math.abs(secretNum - guess) <= 20 && Math.abs(secretNum - guess) > 10){
      
        document.getElementById("feedback").innerHTML = 'Your Hot!';

        guessCounter();

        guessPrint();

        // getUserGuess();
      
      } 
      else if(Math.abs(secretNum - guess) <= 30 && Math.abs(secretNum - guess) > 20){
      
        document.getElementById("feedback").innerHTML = 'Warming up';

        guessCounter();

        guessPrint();

        // getUserGuess();
      
      } 
      else if(Math.abs(secretNum - guess) <= 40 && Math.abs(secretNum - guess) > 30){

        document.getElementById("feedback").innerHTML = 'Your cold, come on';

        guessCounter();

        guessPrint();

        // getUserGuess();
      }
      else if(Math.abs(secretNum - guess) <= 50 && Math.abs(secretNum - guess) > 40){

        document.getElementById("feedback").innerHTML = 'Ice cold man!';

        guessCounter();

        guessPrint();

        // getUserGuess();
      }
      else {
      
        document.getElementById("feedback").innerHTML = 'Subzero freezing';

        guessCounter();

        guessPrint();

        // getUserGuess();
      }
    }

   //*************************************************************

   function guessCounter(){
      
      currentCount++;
      document.getElementById("count").innerHTML = currentCount;
    }
//*****************************************************************

function randomNumber(secretNum){

  secretNum =  Math.floor((Math.random() * 100) + 1);

  return secretNum;
}
//****************************************************************

function guessPrint(){

  $('#guessList').append('<li>' + guess + '</li>');
}

/***********************************************************/
function randomNumber(secretNum){

	secretNum =  Math.floor((Math.random() * 100) + 1);

	return secretNum;
}

//********************************************************
// function newGame(){

//   document.getElementById("new").addEventListener("click", function(){

//     window.location.reload(false);
//   }
// }
/*********************************************************/
// function newGame(){
      
//       document.getElementById("guessButton").addEventListener("click", function(){
//       clearVariables();
//       randomNumber();
//     }
//     }
// //**********************************************************
// function clearVariables(){

// 	currentCount = 0;
// 	document.getElementById("feedback").innerHTML = 'Make your Guess!';
// 	guess = '';
// 	document.getElementById("guessList").innerHTML = '';
// }
// /******************************************************/

