import { Matrix4 } from '../math/Matrix4';
import { Vector2 } from '../math/Vector2';

/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function LightShadow( camera ) {

	this.camera = camera;

	this.bias = 0;
	this.radius = 1;

	this.mapSize = new Vector2( 512, 512 );

	this.map = null;
	this.matrix = new Matrix4();

}

Object.assign( LightShadow.prototype, {

	copy( source ) {

		this.camera = source.camera.clone();

		this.bias = source.bias;
		this.radius = source.radius;

		this.mapSize.copy( source.mapSize );

		return this;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	toJSON() {

		var object = {};

		if ( this.bias !== 0 ) object.bias = this.bias;
		if ( this.radius !== 1 ) object.radius = this.radius;
		if ( this.mapSize.x !== 512 || this.mapSize.y !== 512 ) object.mapSize = this.mapSize.toArray();

		object.camera = this.camera.toJSON( false ).object;
		delete object.camera.matrix;

		return object;

	}

}


export { LightShadow };
