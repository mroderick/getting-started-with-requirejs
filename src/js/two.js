/*jslint white:true */
/*global,
	define,
	console
*/
define(function(){
	'use strict';
	
	var two = {
		sayHello : function sayHello(name){		
			console.log( 'hello ' + name );
		}
	};
	
	return two;
});