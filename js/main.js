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

		return false;
	});
}

//test test test