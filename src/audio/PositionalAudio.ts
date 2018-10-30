/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */
import { Vector3 } from '../math/Vector3';
import { Quaternion } from '../math/Quaternion';
import { Audio } from './Audio';
import { Object3D } from '../core/Object3D';

export function PositionalAudio( listener ) {

	Audio.call( this, listener );

	this.panner = this.context.createPanner();
	this.panner.connect( this.gain );

}

PositionalAudio.prototype = Object.assign( Object.create( Audio.prototype ), {

	constructor: PositionalAudio,

	getOutput() {

		return this.panner;

	}

	getRefDistance() {

		return this.panner.refDistance;

	}

	setRefDistance( value ) {

		this.panner.refDistance = value;

		return this;

	}

	getRolloffFactor() {

		return this.panner.rolloffFactor;

	}

	setRolloffFactor( value ) {

		this.panner.rolloffFactor = value;

		return this;

	}

	getDistanceModel() {

		return this.panner.distanceModel;

	}

	setDistanceModel( value ) {

		this.panner.distanceModel = value;

		return this;

	}

	getMaxDistance() {

		return this.panner.maxDistance;

	}

	setMaxDistance( value ) {

		this.panner.maxDistance = value;

		return this;

	}

	setDirectionalCone( coneInnerAngle, coneOuterAngle, coneOuterGain ) {

		this.panner.coneInnerAngle = coneInnerAngle;
		this.panner.coneOuterAngle = coneOuterAngle;
		this.panner.coneOuterGain = coneOuterGain;

		return this;

	}

	updateMatrixWorld: ( export function () {

		var position = new Vector3();
		var quaternion = new Quaternion();
		var scale = new Vector3();

		var orientation = new Vector3();

		return export function updateMatrixWorld( force ) {

			Object3D.prototype.updateMatrixWorld.call( this, force );

			var panner = this.panner;
			this.matrixWorld.decompose( position, quaternion, scale );

			orientation.set( 0, 0, 1 ).applyQuaternion( quaternion );

			panner.setPosition( position.x, position.y, position.z );
			panner.setOrientation( orientation.x, orientation.y, orientation.z );

		};

	} )()


}

export { PositionalAudio };
