import { Curve } from '../core/Curve';
import { CatmullRom } from '../core/Interpolations';
import { Vector2 } from '../../math/Vector2';

/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */
export function SplineCurve( points /* array of Vector2 */ ) {

	Curve.call( this );

	this.type = 'SplineCurve';

	this.points = points || [];

}

SplineCurve.prototype = Object.create( Curve.prototype );
SplineCurve.prototype.constructor = SplineCurve;

SplineCurve.prototype.isSplineCurve = true;

SplineCurve.prototype.getPoint = export function ( t, optionalTarget ) {

	var point = optionalTarget || new Vector2();

	var points = this.points;
	var p = ( points.length - 1 ) * t;

	var intPoint = Math.floor( p );
	var weight = p - intPoint;

	var p0 = points[ intPoint === 0 ? intPoint : intPoint - 1 ];
	var p1 = points[ intPoint ];
	var p2 = points[ intPoint > points.length - 2 ? points.length - 1 : intPoint + 1 ];
	var p3 = points[ intPoint > points.length - 3 ? points.length - 1 : intPoint + 2 ];

	point.set(
		CatmullRom( weight, p0.x, p1.x, p2.x, p3.x ),
		CatmullRom( weight, p0.y, p1.y, p2.y, p3.y )
	);

	return point;

};

SplineCurve.prototype.copy = export function ( source ) {

	Curve.prototype.copy.call( this, source );

	this.points = [];

	for ( var i = 0, l = source.points.length; i < l; i ++ ) {

		var point = source.points[ i ];

		this.points.push( point.clone() );

	}

	return this;

};

SplineCurve.prototype.toJSON = export function () {

	var data = Curve.prototype.toJSON.call( this );

	data.points = [];

	for ( var i = 0, l = this.points.length; i < l; i ++ ) {

		var point = this.points[ i ];
		data.points.push( point.toArray() );

	}

	return data;

};

SplineCurve.prototype.fromJSON = export function ( json ) {

	Curve.prototype.fromJSON.call( this, json );

	this.points = [];

	for ( var i = 0, l = json.points.length; i < l; i ++ ) {

		var point = json.points[ i ];
		this.points.push( new Vector2().fromArray( point ) );

	}

	return this;

};


export { SplineCurve };
