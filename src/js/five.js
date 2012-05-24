/*jslint white:true */
/*global
	define,
	console
*/
define(function(){
	'use strict';
	function five(name){
		console.log('Anyone still awake in ' + name + '?');
	}

	return five;
});