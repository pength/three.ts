import { Curve } from '../core/Curve';
import { QuadraticBezier } from '../core/Interpolations';
import { Vector3 } from '../../math/Vector3';

/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */
export function QuadraticBezierCurve3( v0, v1, v2 ) {

	Curve.call( this );

	this.type = 'QuadraticBezierCurve3';

	this.v0 = v0 || new Vector3();
	this.v1 = v1 || new Vector3();
	this.v2 = v2 || new Vector3();

}

QuadraticBezierCurve3.prototype = Object.create( Curve.prototype );
QuadraticBezierCurve3.prototype.constructor = QuadraticBezierCurve3;

QuadraticBezierCurve3.prototype.isQuadraticBezierCurve3 = true;

QuadraticBezierCurve3.prototype.getPoint = export function ( t, optionalTarget ) {

	var point = optionalTarget || new Vector3();

	var v0 = this.v0, v1 = this.v1, v2 = this.v2;

	point.set(
		QuadraticBezier( t, v0.x, v1.x, v2.x ),
		QuadraticBezier( t, v0.y, v1.y, v2.y ),
		QuadraticBezier( t, v0.z, v1.z, v2.z )
	);

	return point;

};

QuadraticBezierCurve3.prototype.copy = export function ( source ) {

	Curve.prototype.copy.call( this, source );

	this.v0.copy( source.v0 );
	this.v1.copy( source.v1 );
	this.v2.copy( source.v2 );

	return this;

};

QuadraticBezierCurve3.prototype.toJSON = export function () {

	var data = Curve.prototype.toJSON.call( this );

	data.v0 = this.v0.toArray();
	data.v1 = this.v1.toArray();
	data.v2 = this.v2.toArray();

	return data;

};

QuadraticBezierCurve3.prototype.fromJSON = export function ( json ) {

	Curve.prototype.fromJSON.call( this, json );

	this.v0.fromArray( json.v0 );
	this.v1.fromArray( json.v1 );
	this.v2.fromArray( json.v2 );

	return this;

};


export { QuadraticBezierCurve3 };
