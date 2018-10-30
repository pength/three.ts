import { Vector3 } from './Vector3';
import { _Math } from './Math';

/**
 * Converted from three.js/Line3.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export class Line3 {
	public start: Vector3 = undefined;
	public end: Vector3 = undefined;
	init(start, end) {

		this.start = (start !== undefined) ? start : new Vector3();
		this.end = (end !== undefined) ? end : new Vector3();

	}

	set(start, end) {

		this.start.copy(start);
		this.end.copy(end);

		return this;

	}

	clone() {

		return new Line3().copy(this);

	}

	copy(line) {

		this.start.copy(line.start);
		this.end.copy(line.end);

		return this;

	}

	getCenter(target) {

		if (target === undefined) {

			console.warn('THREE.Line3: .getCenter() target is now required');
			target = new Vector3();

		}

		return target.addVectors(this.start, this.end).multiplyScalar(0.5);

	}

	delta(target) {

		if (target === undefined) {

			console.warn('THREE.Line3: .delta() target is now required');
			target = new Vector3();

		}

		return target.subVectors(this.end, this.start);

	}

	distanceSq() {

		return this.start.distanceToSquared(this.end);

	}

	distance() {

		return this.start.distanceTo(this.end);

	}

	at(t, target) {

		if (target === undefined) {

			console.warn('THREE.Line3: .at() target is now required');
			target = new Vector3();

		}

		return this.delta(target).multiplyScalar(t).add(this.start);

	}

	closestPointToPointParameter(point, clampToLine) {

		var startP = new Vector3();
		var startEnd = new Vector3();

		startP.subVectors(point, this.start);
		startEnd.subVectors(this.end, this.start);

		var startEnd2 = startEnd.dot(startEnd);
		var startEnd_startP = startEnd.dot(startP);

		var t = startEnd_startP / startEnd2;

		if (clampToLine) {

			t = _Math.clamp(t, 0, 1);

		}

		return t;

	}

	closestPointToPoint(point, clampToLine, target) {

		var t = this.closestPointToPointParameter(point, clampToLine);

		if (target === undefined) {

			console.warn('THREE.Line3: .closestPointToPoint() target is now required');
			target = new Vector3();

		}

		return this.delta(target).multiplyScalar(t).add(this.start);

	}

	applyMatrix4(matrix) {

		this.start.applyMatrix4(matrix);
		this.end.applyMatrix4(matrix);

		return this;

	}

	equals(line) {

		return line.start.equals(this.start) && line.end.equals(this.end);

	}

}
