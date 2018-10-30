import { LinearFilter, LinearMipMapLinearFilter, ClampToEdgeWrapping } from '../constants';
import { FileLoader } from './FileLoader';
import { DataTexture } from '../textures/DataTexture';
import { DefaultLoadingManager } from './LoadingManager';

/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function DataTextureLoader( manager ) {

	this.manager = ( manager !== undefined ) ? manager : DefaultLoadingManager;

	// override in sub classes
	this._parser = null;

}

Object.assign( DataTextureLoader.prototype, {

	load( url, onLoad, onProgress, onError ) {

		var scope = this;

		var texture = new DataTexture();

		var loader = new FileLoader( this.manager );
		loader.setResponseType( 'arraybuffer' );

		loader.load( url, export function ( buffer ) {

			var texData = scope._parser( buffer );

			if ( ! texData ) return;

			if ( undefined !== texData.image ) {

				texture.image = texData.image;

			} else if ( undefined !== texData.data ) {

				texture.image.width = texData.width;
				texture.image.height = texData.height;
				texture.image.data = texData.data;

			}

			texture.wrapS = undefined !== texData.wrapS ? texData.wrapS : ClampToEdgeWrapping;
			texture.wrapT = undefined !== texData.wrapT ? texData.wrapT : ClampToEdgeWrapping;

			texture.magFilter = undefined !== texData.magFilter ? texData.magFilter : LinearFilter;
			texture.minFilter = undefined !== texData.minFilter ? texData.minFilter : LinearMipMapLinearFilter;

			texture.anisotropy = undefined !== texData.anisotropy ? texData.anisotropy : 1;

			if ( undefined !== texData.format ) {

				texture.format = texData.format;

			}
			if ( undefined !== texData.type ) {

				texture.type = texData.type;

			}

			if ( undefined !== texData.mipmaps ) {

				texture.mipmaps = texData.mipmaps;

			}

			if ( 1 === texData.mipmapCount ) {

				texture.minFilter = LinearFilter;

			}

			texture.needsUpdate = true;

			if ( onLoad ) onLoad( texture, texData );

		} onProgress, onError );


		return texture;

	}

}


export { DataTextureLoader };
