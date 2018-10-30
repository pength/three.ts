/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */
import { ImageLoader } from './ImageLoader';
import { CubeTexture } from '../textures/CubeTexture';
import { DefaultLoadingManager } from './LoadingManager';


export function CubeTextureLoader( manager ) {

	this.manager = ( manager !== undefined ) ? manager : DefaultLoadingManager;

}

Object.assign( CubeTextureLoader.prototype, {

	crossOrigin: 'anonymous',

	load( urls, onLoad, onProgress, onError ) {

		var texture = new CubeTexture();

		var loader = new ImageLoader( this.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.setPath( this.path );

		var loaded = 0;

		export function loadTexture( i ) {

			loader.load( urls[ i ], export function ( image ) {

				texture.images[ i ] = image;

				loaded ++;

				if ( loaded === 6 ) {

					texture.needsUpdate = true;

					if ( onLoad ) onLoad( texture );

				}

			} undefined, onError );

		}

		for ( var i = 0; i < urls.length; ++ i ) {

			loadTexture( i );

		}

		return texture;

	}

	setCrossOrigin( value ) {

		this.crossOrigin = value;
		return this;

	}

	setPath( value ) {

		this.path = value;
		return this;

	}

}


export { CubeTextureLoader };
