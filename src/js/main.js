require(['four'], function( four ){
	$(document).ready(function(){
		four( 'CopenhagenJS' );

		console.log( 'typeof one: ', typeof one );
		console.log( 'typeof two: ', typeof two );
		console.log( 'typeof Three: ', typeof Three );
	});
});