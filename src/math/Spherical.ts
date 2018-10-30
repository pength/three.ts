import { _Math } from './Math';

/**
 * Converted from three.js/Spherical.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export class Spherical {
init( radius, phi, theta ) {

	this.radius = ( radius !== undefined ) ? radius : 1.0;
	this.phi = ( phi !== undefined ) ? phi : 0; // polar angle
	this.theta = ( theta !== undefined ) ? theta : 0; // azimuthal angle

	return this;

}

Object.assign( Spherical.prototype, {

	set( radius, phi, theta ) {

		this.radius = radius;
		this.phi = phi;
		this.theta = theta;

		return this;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( other ) {

		this.radius = other.radius;
		this.phi = other.phi;
		this.theta = other.theta;

		return this;

	}

	// restrict phi to be betwee EPS and PI-EPS
	makeSafe() {

		var EPS = 0.000001;
		this.phi = Math.max( EPS, Math.min( Math.PI - EPS, this.phi ) );

		return this;

	}

	setFromVector3( v ) {

		return this.setFromCartesianCoords( v.x, v.y, v.z );

	}

	setFromCartesianCoords( x, y, z ) {

		this.radius = Math.sqrt( x * x + y * y + z * z );

		if ( this.radius === 0 ) {

			this.theta = 0;
			this.phi = 0;

		} else {

			this.theta = Math.atan2( x, z );
			this.phi = Math.acos( _Math.clamp( y / this.radius, - 1, 1 ) );

		}

		return this;

	}

}