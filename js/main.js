function initAll() {
	// this should call all the oter functions
	hideShowInfo(); 
}

initAll();

function hideShowInfo() {
	var familyButton = $('.family-button,.records-button');
	var infoHolder = $( '.info-holder' );

	console.log( familyButton )

	familyButton.click( function() {
		infoHolder.addClass('hidden');
		var classToHide = $( this ).attr( 'data-showclass' );

		$( '.'+classToHide ).removeClass('hidden');

		// I should add an 'if' condition here so that if the document is at a certain width then i call the return false //
		return false;
		
	});
}
