/*jslint white:true */
/*global
	define
*/
define(['one', 'two', 'three'], function( ein, zwei, Drei ){
	'use strict';

	function four(name){
		// function
		ein();
		
		// module
		zwei.sayHello( name );
		
		// constructor
		var drei = new Drei();
		drei.sayHello( name );
	}

	return four;
});