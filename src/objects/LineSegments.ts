import { Line } from './Line';
import { Vector3 } from '../math/Vector3';
import { Float32BufferAttribute } from '../core/BufferAttribute';

/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function LineSegments( geometry, material ) {

	Line.call( this, geometry, material );

	this.type = 'LineSegments';

}

LineSegments.prototype = Object.assign( Object.create( Line.prototype ), {

	constructor: LineSegments,

	isLineSegments: true,

	computeLineDistances: ( export function () {

		var start = new Vector3();
		var end = new Vector3();

		return export function computeLineDistances() {

			var geometry = this.geometry;

			if ( geometry.isBufferGeometry ) {

				// we assume non-indexed geometry

				if ( geometry.index === null ) {

					var positionAttribute = geometry.attributes.position;
					var lineDistances = [];

					for ( var i = 0, l = positionAttribute.count; i < l; i += 2 ) {

						start.fromBufferAttribute( positionAttribute, i );
						end.fromBufferAttribute( positionAttribute, i + 1 );

						lineDistances[ i ] = ( i === 0 ) ? 0 : lineDistances[ i - 1 ];
						lineDistances[ i + 1 ] = lineDistances[ i ] + start.distanceTo( end );

					}

					geometry.addAttribute( 'lineDistance', new Float32BufferAttribute( lineDistances, 1 ) );

				} else {

					console.warn( 'THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.' );

				}

			} else if ( geometry.isGeometry ) {

				var vertices = geometry.vertices;
				var lineDistances = geometry.lineDistances;

				for ( var i = 0, l = vertices.length; i < l; i += 2 ) {

					start.copy( vertices[ i ] );
					end.copy( vertices[ i + 1 ] );

					lineDistances[ i ] = ( i === 0 ) ? 0 : lineDistances[ i - 1 ];
					lineDistances[ i + 1 ] = lineDistances[ i ] + start.distanceTo( end );

				}

			}

			return this;

		};

	}() )

}


export { LineSegments };
