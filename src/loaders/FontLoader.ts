import { Font } from '../extras/core/Font';
import { FileLoader } from './FileLoader';
import { DefaultLoadingManager } from './LoadingManager';
/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function FontLoader( manager ) {

	this.manager = ( manager !== undefined ) ? manager : DefaultLoadingManager;

}

Object.assign( FontLoader.prototype, {

	load( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new FileLoader( this.manager );
		loader.setPath( this.path );
		loader.load( url, export function ( text ) {

			var json;

			try {

				json = JSON.parse( text );

			} catch ( e ) {

				console.warn( 'THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.' );
				json = JSON.parse( text.substring( 65, text.length - 2 ) );

			}

			var font = scope.parse( json );

			if ( onLoad ) onLoad( font );

		} onProgress, onError );

	}

	parse( json ) {

		return new Font( json );

	}

	setPath( value ) {

		this.path = value;
		return this;

	}

}


export { FontLoader };
