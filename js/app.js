
$(document).ready(function(){

  // calls newGame to to start process, generate secret number
  newGame();
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

  //Listens for "Newgame button", then resets game
  $(".new").click(function(){
    
    newGame();
    // below is a way to reload from browser
    // window.location.reload(false);
  });

  // listens for submit(button click to submit)
  $('form').submit(function(event){
    event.preventDefault();
    
    guess = document.getElementById("userGuess").value;
    //converts input to integer 
    parseInt(guess);
    // calls checkGuess to verify input is correct
    checkGuess(guess);
    // clears input line for next guess
    // jQuery way
    $('#userGuess').val('');
    // JS way
    // document.getElementById('userGuess').value='';
  });

});
//game variables
var guess;
var secretNum;
var currentCount = 0;

//******************************************************
// checkGuess check if whole number and range
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
// runGame takes guess and processes it to check and see if you won
function runGame(gameNum){
  
  if(Math.abs(secretNum - guess) == 0){
    // Below is the jQuery way to output
    $('#feedback').html('You did it, you won!');
    // Below is the standard JS output
    // document.getElementById("feedback").innerHTML = "You did it, you won!";
    processGuess();
  
  } 
  else if(Math.abs(secretNum - guess) <= 10){
    // Below is the jQuery way to output
    $('#feedback').html('Smokin Hot!!!');
    // Below is the standard JS output
    // document.getElementById("feedback").innerHTML = 'Smokin Hot!!!';
    processGuess();
  
  } 
  else if(Math.abs(secretNum - guess) <= 20 && Math.abs(secretNum - guess) > 10){
    // Below is the jQuery way to output
    $('#feedback').html('Your Hot!');
    // Below is the standard JS output
    // document.getElementById("feedback").innerHTML = 'Your Hot!';
    processGuess();
  
  } 
  else if(Math.abs(secretNum - guess) <= 30 && Math.abs(secretNum - guess) > 20){
    //Below is the jQuery way to output
    $('#feedback').html('Warming up'); 
    //Below is the standard JS output
    // document.getElementById("feedback").innerHTML = 'Warming up';
    processGuess();
  
  } 
  else if(Math.abs(secretNum - guess) <= 40 && Math.abs(secretNum - guess) > 30){
    // Below is the jQuery way to output
    $('#feedback').html('Your cold, come on man');
    // Below is the standard JS output
    // document.getElementById("feedback").innerHTML = 'Your cold, come on';
    processGuess();

  }
  else if(Math.abs(secretNum - guess) <= 50 && Math.abs(secretNum - guess) > 40){
    // Below is the jQuery way to output
    $('#feedback').html('Ice cold man!');
    // Below is the standard JS output
    // document.getElementById("feedback").innerHTML = 'Ice cold man!';
    processGuess();
 }
  else {
    
    // Below is the jQuery way to output
   $('#feedback').html('Subzero freezing');
    // Below is the standard JS way to output
    // document.getElementById("feedback").innerHTML = 'Subzero freezing';
    processGuess();
  }
}
// *************************************************************
// processGuess calls to run several other functions within loop
function processGuess(){

  guessCounter();

  guessPrint();

  console.log(secretNum);
}

//*************************************************************
// guessCounter increments count of guesses and outputs it
function guessCounter(){
      
  currentCount++;
  // jQuery output
  $('#count').html(currentCount);
  //JS output 
  // document.getElementById("count").innerHTML = currentCount;
}
//*****************************************************************
// guessPrint creates new <li> and outputs each user guess
function guessPrint(){

  $('#guessList').append('<li>' + guess + '</li>');
}
// *********************************************************
// randomNum generates a random number between 1 & 100
function randomNumber(){

  secretNum = Math.floor((Math.random() * 100) + 1);

  return secretNum;
}
// *********************************************************
// Clear Feedback line and returns to original message
function clearFeedback(){

  $('#feedback').html('Make your Guess!');
}
// *********************************************************
// Clears output from former game
function clearList(){

  currentCount = 0;
  $('#count').html('0'); 
  $('#guessList').empty(); 
  return currentCount;
}
//**********************************************************
// when called, calls all other functions to clear for new game
function newGame(){

  $('#userGuess').val('');
  clearFeedback();
  randomNumber();
  clearList();
}
// ***********************************************************
// end of program : ) ****************************************