$(document).ready(function() {
	var playerName='';
	

	

	// Hide on load
	$('#dashboard').hide();
	$('#question1').hide();
	

	//user can start typing name immediently
	$('#player-name-btn').focus();
	
	$('#player-name-btn').on('click', function (e) {
		e.preventDefault();
		playerName = $('#player-name').val();
		console.log(playerName);
	$('#show-player-name').text(playerName);
	$('#dashboard').fadeIn(500);
	$('#name-screen').fadeOut(500); 
	$('#level-screen').fadeOut(500);
	$('#begin-button').fadeOut(500);

	
	})

	// Question 1

	
	

	

})

	
		

	
