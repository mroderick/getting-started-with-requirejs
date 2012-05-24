/*jslint white:true */
/*global
	define,
	console
*/
define(function(){
	'use strict';
	
	function Three(){		
		this.sayHello = function sayHello(name){
			console.log( name + ', hi there!');
		};
	}	

	return Three;
});