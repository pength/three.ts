/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function arrayMin( array ) {

	if ( array.length === 0 ) return Infinity;

	var min = array[ 0 ];

	for ( var i = 1, l = array.length; i < l; ++ i ) {

		if ( array[ i ] < min ) min = array[ i ];

	}

	return min;

}

export function arrayMax( array ) {

	if ( array.length === 0 ) return - Infinity;

	var max = array[ 0 ];

	for ( var i = 1, l = array.length; i < l; ++ i ) {

		if ( array[ i ] > max ) max = array[ i ];

	}

	return max;

}

export { arrayMin, arrayMax };
