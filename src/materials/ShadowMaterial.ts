/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 *
 * parameters = {
 *  color: <THREE.Color>
 * }
 */

import { Material } from './Material';
import { Color } from '../math/Color';

export function ShadowMaterial( parameters ) {

	Material.call( this );

	this.type = 'ShadowMaterial';

	this.color = new Color( 0x000000 );
	this.transparent = true;

	this.setValues( parameters );

}

ShadowMaterial.prototype = Object.create( Material.prototype );
ShadowMaterial.prototype.constructor = ShadowMaterial;

ShadowMaterial.prototype.isShadowMaterial = true;

ShadowMaterial.prototype.copy = export function ( source ) {

	Material.prototype.copy.call( this, source );

	this.color.copy( source.color );

	return this;

};


export { ShadowMaterial };
