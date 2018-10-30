import { Color } from '../math/Color';

/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function Fog( color, near, far ) {

	this.name = '';

	this.color = new Color( color );

	this.near = ( near !== undefined ) ? near : 1;
	this.far = ( far !== undefined ) ? far : 1000;

}

Fog.prototype.isFog = true;

Fog.prototype.clone = export function () {

	return new Fog( this.color, this.near, this.far );

};

Fog.prototype.toJSON = export function ( /* meta */ ) {

	return {
		type: 'Fog',
		color: this.color.getHex(),
		near: this.near,
		far: this.far
	};

};

export { Fog };
