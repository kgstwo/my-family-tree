// function initAll() {
	//this should call all the oter functions
	// hideShowInfo(); 
// }

// initAll();

// function hideShowInfo() {
// 	var familyButton = $('.family-button,.records-button');
// 	var infoHolder = $( '.info-holder' );
// 	var selected = $( '.selected');

// 	familyButton.click( function() {
// 		infoHolder.addClass('hidden');
// 		var classToShow = $( this ).attr( 'data-showclass' );
// 		$( '.'+classToShow ).removeClass('hidden');

// 		// I should add an 'if' condition here so that if the document is at a certain width then i call the return false //
// 		return false; //makes the previous html function of the buttons going to another page null and void
		
// 		selected.addClass( 'hide');
// 		var reveal = $( this ).attr( '.sel-color');
// 		$( '.'+reveal ).removeClass( 'hide' );

// 		console.log(reveal);
		

	// }); //closes familyButton.click function, then familyButton.click itself
// } // closes hideShowInfo function

if ($(window).width() > 321) {
	// alert('hee');
	$( 'search' ).attr( 'data-showdiv');

$(document).ready(function(){
  $('.popdown').popdown();
});
