import { Vector2 } from "./Vector2";

/**
 * three.js:Box2.js
 */
export class Box2 {
	public _min: Vector2 = undefined;
	public _max: Vector2 = undefined;

	private _temp: Vector2 = undefined;

	constructor(min: Vector2, max: Vector2) {

		this._min = (min !== undefined) ? min : new Vector2(+ Infinity, + Infinity);
		this._max = (max !== undefined) ? max : new Vector2(- Infinity, - Infinity);

	}

	public set(min: Vector2, max: Vector2): Box2 {

		this._min.copy(min);
		this._max.copy(max);

		return this;

	}

	public setFromPoints(points: Vector2): Box2 {

		this.makeEmpty();

		for (let i = 0, il = points.length(); i < il; i++) {

			this.expandByPoint(points[i]);

		}

		return this;

	}

	public setFromCenterAndSize(center: Vector2, size: Vector2): Box2 {

		if (this._temp == undefined)
			this._temp = size.clone();

		var halfSize = this._temp.copy(size).multiplyScalar(0.5);
		this._min.copy(center).sub(halfSize);
		this._max.copy(center).add(halfSize);

		return this;
	}

	public clone(): Box2 {

		return new Box2(this._min, this._max);

	}

	public copy(box: Box2): Box2 {

		this._min.copy(box._min);
		this._max.copy(box._max);

		return this;

	}

	public makeEmpty(): Box2 {

		this._min.x = this._min.y = + Infinity;
		this._max.x = this._max.y = - Infinity;

		return this;
	}

	public isEmpty(): boolean {

		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

		return (this._max.x < this._min.x) || (this._max.y < this._min.y);

	}

	public getCenter(): Vector2 {

		return this.isEmpty() ? new Vector2(0, 0) : this._min.add(this._max).multiplyScalar(0.5);

	}

	public getSize(): Vector2 {

		return this.isEmpty() ? new Vector2(0, 0) : this._max.add(this._min);

	}

	public expandByPoint(point: Vector2): Box2 {

		this._min.min(point);
		this._max.max(point);

		return this;

	}

	public expandByVector(vector: Vector2): Box2 {

		this._min.sub(vector);
		this._max.add(vector);

		return this;

	}

	public expandByScalar(scalar: number): Box2 {

		this._min.addScalar(- scalar);
		this._max.addScalar(scalar);

		return this;

	}

	public containsPoint(point: Vector2): boolean {

		return point.x < this._min.x || point.x > this._max.x ||
			point.y < this._min.y || point.y > this._max.y ? false : true;

	}

	public containsBox(box: Box2): boolean {

		return this._min.x <= box._min.x && box._max.x <= this._max.x &&
			this._min.y <= box._min.y && box._max.y <= this._max.y;

	}

	public getParameter(point): Vector2 {

		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.

		return new Vector2(
			(point.x - this._min.x) / (this._max.x - this._min.x),
			(point.y - this._min.y) / (this._max.y - this._min.y)
		);

	}

	public intersectsBox(box): boolean {

		// using 4 splitting planes to rule out intersections

		return box.max.x < this._min.x || box.min.x > this._max.x ||
			box.max.y < this._min.y || box.min.y > this._max.y ? false : true;

	}

	public clampPoint(point: Vector2): Vector2 {

		return new Vector2(point.x, point.y).clamp(this._min, this._max);

	}

	public distanceToPoint(point: Vector2): number {

		var clampedPoint = new Vector2(point.x, point.y).clamp(this._min, this._max);
		return clampedPoint.sub(point).length();

	}

	public intersect(box: Box2): Box2 {

		this._min.max(box._min);
		this._max.min(box._max);

		return this;

	}

	public union(box: Box2): Box2 {

		this._min.min(box._min);
		this._max.max(box._max);

		return this;

	}

	public translate(offset: Vector2): Box2 {

		this._min.add(offset);
		this._max.add(offset);

		return this;

	}

	public equals(box: Box2): boolean {

		return box._min.equals(this._min) && box._max.equals(this._max);

	}
}