$(document).ready(function() {
	var playerName ='';
	var easy = false
	var medium = false
	var hard = false
	

	

	// Hide on load
	$('#level-screen').hide();
	$('#begin-button').hide();
	$('#dashboard').hide();
	$('#question1-easy').hide();
	$('#incorrect').hide();
	

	//user can start typing name immediently
	$('#next-button').focus();
	
	$('#next-button').on('click', function (e) {
		e.preventDefault();
		playerName = $('#player-name').val();
		console.log(playerName);
		$('#show-player-name').text(playerName);
		$('#name-screen').fadeOut(500); 
		$('#level-screen').fadeIn(500);
		$('#begin-button').fadeIn(500);
	});
		
$('#begin-button').click(function(){

		var easy = $('#easy').is(':checked');
		var medium = $('#medium').is(':checked');
		var hard = $('#hard').is(':checked');
		

			if(easy) {
				console.log("player-chose-easy");
				
				$('#begin-button').fadeOut(1);
				$('#level-screen').fadeOut(1);
				$('#dashboard').fadeIn(1);
				$('#question1-easy').fadeIn(500)
				
				$('#player-answer-1').click(function(){


					var options  = $('#q1a, #q1b, #q1c').is(':checked');
					var answer = $('#q1d').is(':checked');
						
						if (options) {
							console.log("incorrect");
							window.confirm("Oh no! That answer is incorrect! Try again.");
								
							


						}
						else {
							console.log("correct");
							window.confirm("Congratulations! That answer is correct!");
							$('#player-answer-1').click(function(){
								$('#next-button').fadeIn(500);
							});

						}



				});
				


			}
			else if(medium) {
				console.log("player-chose-medium");
			}
			else {
				console.log("player-chose-hard");
			}



	});


	
	

	
	

	

})

	
		

	
