$(document).ready(function() {
	var playerName ='';
	var easy = false
	var medium = false
	var hard = false
	

	

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
		var attrEasy = $('#easy').attr('checked');
		var attrMedium = $('#medium').attr('checked');
		var attrHard= $('#hard').attr('checked');
		if(attr) {
			console.log("player-chose-easy");
		}
		else if(attrMedium) {
			console.log("player-chose-medium");
		}
		else {
			console.log("player-chose-hard");
		}
	});

	$()


	
	

	

})

	
		

	
