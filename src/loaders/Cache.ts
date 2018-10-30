/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

var Cache = {

	enabled: false,

	files: {}

	add( key, file ) {

		if ( this.enabled === false ) return;

		// console.log( 'THREE.Cache', 'Adding key:', key );

		this.files[ key ] = file;

	}

	get( key ) {

		if ( this.enabled === false ) return;

		// console.log( 'THREE.Cache', 'Checking key:', key );

		return this.files[ key ];

	}

	remove( key ) {

		delete this.files[ key ];

	}

	clear() {

		this.files = {};

	}

};


export { Cache };
