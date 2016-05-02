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
		
$('#begin-button').on('click', function(e){
	e.preventDefault();
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

	
	

	
	

	

})

	
		

	
