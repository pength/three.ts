/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */
var context;

var AudioContext = {

	getContext() {

		if ( context === undefined ) {

			context = new ( window.AudioContext || window.webkitAudioContext )();

		}

		return context;

	}

	setContext( value ) {

		context = value;

	}

};

export { AudioContext };
