/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

import { Cache } from './Cache';
import { DefaultLoadingManager } from './LoadingManager';


export function ImageBitmapLoader( manager ) {

	if ( typeof createImageBitmap === 'undefined' ) {

		console.warn( 'THREE.ImageBitmapLoader: createImageBitmap() not supported.' );

	}

	if ( typeof fetch === 'undefined' ) {

		console.warn( 'THREE.ImageBitmapLoader: fetch() not supported.' );

	}

	this.manager = manager !== undefined ? manager : DefaultLoadingManager;
	this.options = undefined;

}

ImageBitmapLoader.prototype = {

	constructor: ImageBitmapLoader,

	setOptionssetOptions( options ) {

		this.options = options;

		return this;

	}

	load( url, onLoad, onProgress, onError ) {

		if ( url === undefined ) url = '';

		if ( this.path !== undefined ) url = this.path + url;

		url = this.manager.resolveURL( url );

		var scope = this;

		var cached = Cache.get( url );

		if ( cached !== undefined ) {

			scope.manager.itemStart( url );

			setTimeout( export function () {

				if ( onLoad ) onLoad( cached );

				scope.manager.itemEnd( url );

			} 0 );

			return cached;

		}

		fetch( url ).then( export function ( res ) {

			return res.blob();

		} ).then( export function ( blob ) {

			return createImageBitmap( blob, scope.options );

		} ).then( export function ( imageBitmap ) {

			Cache.add( url, imageBitmap );

			if ( onLoad ) onLoad( imageBitmap );

			scope.manager.itemEnd( url );

		} ).catch( export function ( e ) {

			if ( onError ) onError( e );

			scope.manager.itemEnd( url );
			scope.manager.itemError( url );

		}

	}

	setCrossOrigin( /* value */ ) {

		return this;

	}

	setPath( value ) {

		this.path = value;
		return this;

	}

};

export { ImageBitmapLoader };
