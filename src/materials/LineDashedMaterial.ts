/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

import { LineBasicMaterial } from './LineBasicMaterial';

export function LineDashedMaterial( parameters ) {

	LineBasicMaterial.call( this );

	this.type = 'LineDashedMaterial';

	this.scale = 1;
	this.dashSize = 3;
	this.gapSize = 1;

	this.setValues( parameters );

}

LineDashedMaterial.prototype = Object.create( LineBasicMaterial.prototype );
LineDashedMaterial.prototype.constructor = LineDashedMaterial;

LineDashedMaterial.prototype.isLineDashedMaterial = true;

LineDashedMaterial.prototype.copy = export function ( source ) {

	LineBasicMaterial.prototype.copy.call( this, source );

	this.scale = source.scale;
	this.dashSize = source.dashSize;
	this.gapSize = source.gapSize;

	return this;

};


export { LineDashedMaterial };
