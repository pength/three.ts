import { Light } from './Light';
import { Color } from '../math/Color';
import { Object3D } from '../core/Object3D';

/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function HemisphereLight( skyColor, groundColor, intensity ) {

	Light.call( this, skyColor, intensity );

	this.type = 'HemisphereLight';

	this.castShadow = undefined;

	this.position.copy( Object3D.DefaultUp );
	this.updateMatrix();

	this.groundColor = new Color( groundColor );

}

HemisphereLight.prototype = Object.assign( Object.create( Light.prototype ), {

	constructor: HemisphereLight,

	isHemisphereLight: true,

	copy( source ) {

		Light.prototype.copy.call( this, source );

		this.groundColor.copy( source.groundColor );

		return this;

	}

}


export { HemisphereLight };
