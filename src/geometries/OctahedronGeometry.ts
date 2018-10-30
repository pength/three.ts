/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

import { Geometry } from '../core/Geometry';
import { PolyhedronBufferGeometry } from './PolyhedronGeometry';

// OctahedronGeometry

export function OctahedronGeometry( radius, detail ) {

	Geometry.call( this );

	this.type = 'OctahedronGeometry';

	this.parameters = {
		radius: radius,
		detail: detail
	};

	this.fromBufferGeometry( new OctahedronBufferGeometry( radius, detail ) );
	this.mergeVertices();

}

OctahedronGeometry.prototype = Object.create( Geometry.prototype );
OctahedronGeometry.prototype.constructor = OctahedronGeometry;

// OctahedronBufferGeometry

export function OctahedronBufferGeometry( radius, detail ) {

	var vertices = [
		1, 0, 0, 	- 1, 0, 0,	0, 1, 0,
		0, - 1, 0, 	0, 0, 1,	0, 0, - 1
	];

	var indices = [
		0, 2, 4,	0, 4, 3,	0, 3, 5,
		0, 5, 2,	1, 2, 5,	1, 5, 3,
		1, 3, 4,	1, 4, 2
	];

	PolyhedronBufferGeometry.call( this, vertices, indices, radius, detail );

	this.type = 'OctahedronBufferGeometry';

	this.parameters = {
		radius: radius,
		detail: detail
	};

}

OctahedronBufferGeometry.prototype = Object.create( PolyhedronBufferGeometry.prototype );
OctahedronBufferGeometry.prototype.constructor = OctahedronBufferGeometry;


export { OctahedronGeometry, OctahedronBufferGeometry };
