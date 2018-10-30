import { Vector3 } from '../../math/Vector3';
import { Curve } from '../core/Curve';
/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function LineCurve3( v1, v2 ) {

	Curve.call( this );

	this.type = 'LineCurve3';

	this.v1 = v1 || new Vector3();
	this.v2 = v2 || new Vector3();

}

LineCurve3.prototype = Object.create( Curve.prototype );
LineCurve3.prototype.constructor = LineCurve3;

LineCurve3.prototype.isLineCurve3 = true;

LineCurve3.prototype.getPoint = export function ( t, optionalTarget ) {

	var point = optionalTarget || new Vector3();

	if ( t === 1 ) {

		point.copy( this.v2 );

	} else {

		point.copy( this.v2 ).sub( this.v1 );
		point.multiplyScalar( t ).add( this.v1 );

	}

	return point;

};

// Line curve is linear, so we can overwrite default getPointAt

LineCurve3.prototype.getPointAt = export function ( u, optionalTarget ) {

	return this.getPoint( u, optionalTarget );

};

LineCurve3.prototype.copy = export function ( source ) {

	Curve.prototype.copy.call( this, source );

	this.v1.copy( source.v1 );
	this.v2.copy( source.v2 );

	return this;

};

LineCurve3.prototype.toJSON = export function () {

	var data = Curve.prototype.toJSON.call( this );

	data.v1 = this.v1.toArray();
	data.v2 = this.v2.toArray();

	return data;

};

LineCurve3.prototype.fromJSON = export function ( json ) {

	Curve.prototype.fromJSON.call( this, json );

	this.v1.fromArray( json.v1 );
	this.v2.fromArray( json.v2 );

	return this;

};


export { LineCurve3 };
