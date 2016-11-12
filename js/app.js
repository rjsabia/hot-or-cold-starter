
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

var secretNum;
var currentCount = 0;

randomNumber();
getUserGuess();


/***********************************************************/
function randomNumber(){

	secretNum =  Math.floor((Math.random() * 100) + 1);

	return secretNum;
}
/*********************************************************/
 function getUserGuess() {
       
        $("#guessButton").click(guessGame);
       
        $("#userGuess").keydown(function (enter) {
       
            if (enter.keyCode == 13) {
       
                guessGame();
            }
        });
    }
 /******************************************************/
 function guessGame(){

 	var guess = parseInt($('#userGuess').val());
       
       if (guess !== null && $.isNumeric(guess) 
       	   && (0 < guess < 101)) { 

       		currentCount += 1;

       		$('#count').html(currentCount);

       		if (guess === secretNum){

       			$('#feedback').html('You Got it! The secret number is ' + secretNum);

       		}

       		else if ( guess )


 }