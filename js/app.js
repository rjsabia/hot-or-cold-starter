
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

/*Variables*/
var userGuess;
var secretNum;
var count = 0;

  $('form').submit(function(event){
      
      event.preventDefault();
      
      getUserGuess();
    });
   
    $('newButton').click(newGame);
};

function getUserGuess(){
  		//get the user guess
  		
  		userGuess = $input.val();
  		
  		$input.val('');
  		
  		$input.focus();
  		
  		checkGuess()
  		
  	}
/*********************************************************/
function checkGuess(){

		parseInt(userGuess);

  		if(!(userGuess % 1 == 0)){
  			
  			alert("please input a number");
  			
  			getUserGuess();
  		}
  		
  		else if(!(userGuess > 0) || !(userGuess < 101)){
  			
  			alert("please choose a number between zero and 100");
  			
  			getUserGuess();
  		}
  		else{

  			guessGame();
  		}
		
    
	}

/*********************************************************/
function guessCounter(){
  		
  		count++;
  	}

/*********************************************************/
function newGame(){
  		
  		$('form').find('input[type=submit]');
  		clearVariables();
  		randomNumber();
  	}



/***********************************************************/
function randomNumber(secretNum){

	secretNum =  Math.floor((Math.random() * 100) + 1);

	return secretNum;
}
/*********************************************************/
function clearVariables(){

	count = 0;
	feedback = 'Make your Guess!';
	userGuess = '';
	guessList = '';
}
/******************************************************/
function guessGame(){
  		
  		if(secretNum == userGuess){
  		
  		userFeedback = "You did it, you won! Hit the new game button to try again";
  		
  		} 
  		else if(Math.abs(secretNumber - userGuess) <= 10){
  		
  			userFeedback = 'Smokin Hot!!!';

  			guessCounter();

  			getUserGuess();
  		
  		} 
  		else if(Math.abs(secretNumber - userGuess) <= 20 && Math.abs(secretNumber - userGuess) > 10){
  		
  			userFeedback = 'Your Hot!';

  			guessCounter();

  			getUserGuess();
  		
  		} 
  		else if(Math.abs(secretNumber - userGuess) <= 30 && Math.abs(secretNumber - userGuess) > 20){
  		
  			userFeedback = 'Warming up';

  			guessCounter();

  			getUserGuess();
  		
  		} 
  		else if(Math.abs(secretNumber - userGuess) <= 40 && Math.abs(secretNumber - userGuess) > 30){

  			userFeedback = 'Your cold, come on';

  			guessCounter();

  			getUserGuess();
  		}
  		else if(Math.abs(secretNumber - userGuess) <= 50 && Math.abs(secretNumber - userGuess) > 40){

  			userFeedback = 'Ice cold man!';

  			guessCounter();

  			getUserGuess();
  		}
  		else {
  		
  			userFeedback = 'Subzero freezing';

  			guessCounter();

  			getUserGuess();
  		}
  	}
