import { MeshPhongMaterial } from './MeshPhongMaterial';

/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function MeshToonMaterial( parameters ) {

	MeshPhongMaterial.call( this );

	this.defines = { 'TOON': '' };

	this.type = 'MeshToonMaterial';

	this.gradientMap = null;

	this.setValues( parameters );

}

MeshToonMaterial.prototype = Object.create( MeshPhongMaterial.prototype );
MeshToonMaterial.prototype.constructor = MeshToonMaterial;

MeshToonMaterial.prototype.isMeshToonMaterial = true;

MeshToonMaterial.prototype.copy = export function ( source ) {

	MeshPhongMaterial.prototype.copy.call( this, source );

	this.gradientMap = source.gradientMap;

	return this;

};


export { MeshToonMaterial };
