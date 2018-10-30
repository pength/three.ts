import { Object3D } from '../../core/Object3D';

/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function ImmediateRenderObject( material ) {

	Object3D.call( this );

	this.material = material;
	this.render = export function ( /* renderCallback */ ) {};

}

ImmediateRenderObject.prototype = Object.create( Object3D.prototype );
ImmediateRenderObject.prototype.constructor = ImmediateRenderObject;

ImmediateRenderObject.prototype.isImmediateRenderObject = true;


export { ImmediateRenderObject };
