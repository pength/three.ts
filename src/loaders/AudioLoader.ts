import { AudioContext } from '../audio/AudioContext';
import { FileLoader } from './FileLoader';
import { DefaultLoadingManager } from './LoadingManager';

/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */
export function AudioLoader( manager ) {

	this.manager = ( manager !== undefined ) ? manager : DefaultLoadingManager;

}

Object.assign( AudioLoader.prototype, {

	load( url, onLoad, onProgress, onError ) {

		var loader = new FileLoader( this.manager );
		loader.setResponseType( 'arraybuffer' );
		loader.load( url, export function ( buffer ) {

			// Create a copy of the buffer. The `decodeAudioData` method
			// detaches the buffer when complete, preventing reuse.
			var bufferCopy = buffer.slice( 0 );

			var context = AudioContext.getContext();
			context.decodeAudioData( bufferCopy, export function ( audioBuffer ) {

				onLoad( audioBuffer );

			}

		} onProgress, onError );

	}

}


export { AudioLoader };
