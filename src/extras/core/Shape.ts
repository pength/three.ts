import { Path } from './Path';
import { _Math } from '../../math/Math';

/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

// STEP 1 Create a path.
// STEP 2 Turn path into shape.
// STEP 3 ExtrudeGeometry takes in Shape/Shapes
// STEP 3a - Extract points from each shape, turn to vertices
// STEP 3b - Triangulate each shape, add faces.

export function Shape( points ) {

	Path.call( this, points );

	this.uuid = _Math.generateUUID();

	this.type = 'Shape';

	this.holes = [];

}

Shape.prototype = Object.assign( Object.create( Path.prototype ), {

	constructor: Shape,

	getPointsHoles( divisions ) {

		var holesPts = [];

		for ( var i = 0, l = this.holes.length; i < l; i ++ ) {

			holesPts[ i ] = this.holes[ i ].getPoints( divisions );

		}

		return holesPts;

	}

	// get points of shape and holes (keypoints based on segments parameter)

	extractPoints( divisions ) {

		return {

			shape: this.getPoints( divisions ),
			holes: this.getPointsHoles( divisions )

		};

	}

	copy( source ) {

		Path.prototype.copy.call( this, source );

		this.holes = [];

		for ( var i = 0, l = source.holes.length; i < l; i ++ ) {

			var hole = source.holes[ i ];

			this.holes.push( hole.clone() );

		}

		return this;

	}

	toJSON() {

		var data = Path.prototype.toJSON.call( this );

		data.uuid = this.uuid;
		data.holes = [];

		for ( var i = 0, l = this.holes.length; i < l; i ++ ) {

			var hole = this.holes[ i ];
			data.holes.push( hole.toJSON() );

		}

		return data;

	}

	fromJSON( json ) {

		Path.prototype.fromJSON.call( this, json );

		this.uuid = json.uuid;
		this.holes = [];

		for ( var i = 0, l = json.holes.length; i < l; i ++ ) {

			var hole = json.holes[ i ];
			this.holes.push( new Path().fromJSON( hole ) );

		}

		return this;

	}

}


export { Shape };
