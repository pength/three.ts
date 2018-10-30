import { Color } from '../math/Color';

/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function FogExp2( color, density ) {

	this.name = '';

	this.color = new Color( color );
	this.density = ( density !== undefined ) ? density : 0.00025;

}

FogExp2.prototype.isFogExp2 = true;

FogExp2.prototype.clone = export function () {

	return new FogExp2( this.color, this.density );

};

FogExp2.prototype.toJSON = export function ( /* meta */ ) {

	return {
		type: 'FogExp2',
		color: this.color.getHex(),
		density: this.density
	};

};

export { FogExp2 };
