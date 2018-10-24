/**
 * Converted from three.js/Vector2.js, If you want to see the js source file, please go to https://threejs.org/
 * @author illegalDriver
 */
export class Vector2 {
	public x: number;
	public y: number;

	private _temp_0: Vector2 = undefined;
	private _temp_1: Vector2 = undefined;

	public isVector2: boolean = true;

	constructor(x, y) {

		this.x = x || 0;
		this.y = y || 0;
	}

	getWidth(): number {

		return this.x;
	}

	public setWidth(value: number): Vector2 {

		this.x = value;
		return this;
	}



	public getHeight(): number {

		return this.y;

	}

	public setHeight(value: number): Vector2 {

		this.y = value;
		return this;
	}

	public set(x: number, y: number): Vector2 {

		this.x = x;
		this.y = y;
		return this;
	}

	public setScalar(scalar: number): Vector2 {

		this.x = scalar;
		this.y = scalar;
		return this;
	}

	public setX(x: number) {

		this.x = x;
		return this;
	}

	public getX(): number {

		return this.x;

	}

	public setY(y: number) {

		this.y = y;
	}

	public getY(): number {
		return this.y;

	}

	public setComponent(index: number, value: number): Vector2 {

		switch (index) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			default: throw new Error('index is out of range: ' + index);

		}
		return this;
	}

	public getComponent(index: number): number {

		switch (index) {

			case 0: return this.x;
			case 1: return this.y;
			default: throw new Error('index is out of range: ' + index);

		}
	}

	public clone(): Vector2 {

		return new Vector2(this.x, this.y);
	}

	public copy(v: Vector2): Vector2 {

		this.x = v.x;
		this.y = v.y;
		return this;
	}

	public add(v: Vector2): Vector2 {
		this.x += v.x;
		this.y += v.y;

		return this;
	}

	public addScalar(s: number): Vector2 {

		this.x += s;
		this.y += s;

		return this;

	}

	public addVectors(a: Vector2, b: Vector2): Vector2 {

		this.x = a.x + b.x;
		this.y = a.y + b.y;

		return this;

	}

	public addScaledVector(v: Vector2, s: number): Vector2 {

		this.x += v.x * s;
		this.y += v.y * s;

		return this;

	}

	public sub(v: Vector2): Vector2 {
		
		this.x -= v.x;
		this.y -= v.y;

		return this;

	}

	public subScalar(s: number): Vector2 {

		this.x -= s;
		this.y -= s;

		return this;

	}

	public subVectors(a: Vector2, b: Vector2): Vector2 {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		return this;
	}

	public multiply(v: Vector2): Vector2 {

		this.x *= v.x;
		this.y *= v.y;

		return this;

	}

	public multiplyScalar(scalar: number): Vector2 {

		this.x *= scalar;
		this.y *= scalar;

		return this;

	}

	public divide(v: Vector2): Vector2 {

		this.x /= v.x;
		this.y /= v.y;

		return this;

	}

	public divideScalar(scalar: number): Vector2 {

		return this.multiplyScalar(1 / scalar);

	}

	public applyMatrix3(m): Vector2 {

		var x = this.x, y = this.y;
		var e = m.elements;

		this.x = e[0] * x + e[3] * y + e[6];
		this.y = e[1] * x + e[4] * y + e[7];

		return this;

	}

	public min(v: Vector2): Vector2 {

		this.x = Math.min(this.x, v.x);
		this.y = Math.min(this.y, v.y);

		return this;

	}

	public max(v: Vector2): Vector2 {

		this.x = Math.max(this.x, v.x);
		this.y = Math.max(this.y, v.y);

		return this;

	}

	public clamp(min: Vector2, max: Vector2): Vector2 {

		// assumes min < max, componentwise

		this.x = Math.max(min.x, Math.min(max.x, this.x));
		this.y = Math.max(min.y, Math.min(max.y, this.y));

		return this;

	}

	public clampScalar(minVal: number, maxVal: number): Vector2 {

		if (this._temp_0 == undefined)
			this._temp_0 = new Vector2(minVal, minVal);
		else
			this._temp_0.set(minVal, minVal);

		if (this._temp_1 == undefined)
			this._temp_0 = new Vector2(maxVal, maxVal);
		else
			this._temp_0.set(maxVal, maxVal);

		return this.clamp(this._temp_0, this._temp_0);

	}

	public clampLength(_min: number, _max: number): Vector2 {

		var length = this.length();

		return this.divideScalar(length || 1).multiplyScalar(Math.max(_min, Math.min(_max, length)));

	}

	public floor(): Vector2 {

		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);

		return this;

	}

	public ceil(): Vector2 {

		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);

		return this;

	}

	public round(): Vector2 {

		this.x = Math.round(this.x);
		this.y = Math.round(this.y);

		return this;

	}

	public roundToZero(): Vector2 {

		this.x = (this.x < 0) ? Math.ceil(this.x) : Math.floor(this.x);
		this.y = (this.y < 0) ? Math.ceil(this.y) : Math.floor(this.y);

		return this;

	}

	public negate(): Vector2 {

		this.x = - this.x;
		this.y = - this.y;

		return this;

	}

	public dot(v: Vector2): number {

		return this.x * v.x + this.y * v.y;

	}

	public cross(v): number {

		return this.x * v.y - this.y * v.x;

	}

	public lengthSq(): number {

		return this.x * this.x + this.y * this.y;

	}

	public length(): number {

		return Math.sqrt(this.x * this.x + this.y * this.y);

	}

	public manhattanLength(): number {

		return Math.abs(this.x) + Math.abs(this.y);

	}

	public normalize(): Vector2 {

		return this.divideScalar(this.length() || 1);

	}

	public angle(): number {

		// computes the angle in radians with respect to the positive x-axis

		var angle = Math.atan2(this.y, this.x);

		if (angle < 0) angle += 2 * Math.PI;

		return angle;

	}

	public distanceTo(v: Vector2): number {

		return Math.sqrt(this.distanceToSquared(v));

	}

	public distanceToSquared(v: Vector2): number {

		var dx = this.x - v.x, dy = this.y - v.y;
		return dx * dx + dy * dy;

	}

	public manhattanDistanceTo(v: Vector2): number {

		return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);

	}

	public setLength(length): Vector2 {

		return this.normalize().multiplyScalar(length);

	}

	public lerp(v: Vector2, alpha: number): Vector2 {

		this.x += (v.x - this.x) * alpha;
		this.y += (v.y - this.y) * alpha;

		return this;

	}

	public lerpVectors(v1: Vector2, v2: Vector2, alpha: number): Vector2 {

		return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);

	}

	public equals(v: Vector2): boolean {

		return ((v.x === this.x) && (v.y === this.y));
	}

	public fromArray(array: number[], offset: number): Vector2 {

		if (offset === undefined) offset = 0;

		this.x = array[offset];
		this.y = array[offset + 1];
		return this;
	}

	public toArray(array: number[], offset: number): number[] {

		if (array === undefined) array = [];
		if (offset === undefined) offset = 0;

		array[offset] = this.x;
		array[offset + 1] = this.y;

		return array;

	}

	public fromBufferAttribute(attribute: Vector2, index: number): Vector2 {

		this.x = attribute[index];
		this.y = attribute[index];
		return this;
	}

	public rotateAround(center: Vector2, angle: number): Vector2 {

		var c = Math.cos(angle), s = Math.sin(angle);

		var x = this.x - center.x;
		var y = this.y - center.y;

		this.x = x * c - y * s + center.x;
		this.y = x * s + y * c + center.y;
		return this;
	}

}