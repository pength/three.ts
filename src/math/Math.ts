/**
 * Converted from three.js/_Math.js, If you want to see the js source file, please go to https://threejs.org/
 * @author illegalDriver
 */
export class _Math {

	public static readonly DEG2RAD: number = Math.PI / 180;
	public static readonly RAD2DEG: number = 180 / Math.PI;

	public static lut = [];

	public static generateUUID(): string {
		if (_Math.lut.length == 0) {
			for (var i = 0; i < 256; i++) {
				_Math.lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
			}
		}

		// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
		var d0 = Math.random() * 0xffffffff | 0;
		var d1 = Math.random() * 0xffffffff | 0;
		var d2 = Math.random() * 0xffffffff | 0;
		var d3 = Math.random() * 0xffffffff | 0;
		var uuid = _Math.lut[d0 & 0xff] + _Math.lut[d0 >> 8 & 0xff] + _Math.lut[d0 >> 16 & 0xff] + _Math.lut[d0 >> 24 & 0xff] + '-' +
			_Math.lut[d1 & 0xff] + _Math.lut[d1 >> 8 & 0xff] + '-' + _Math.lut[d1 >> 16 & 0x0f | 0x40] + _Math.lut[d1 >> 24 & 0xff] + '-' +
			_Math.lut[d2 & 0x3f | 0x80] + _Math.lut[d2 >> 8 & 0xff] + '-' + _Math.lut[d2 >> 16 & 0xff] + _Math.lut[d2 >> 24 & 0xff] +
			_Math.lut[d3 & 0xff] + _Math.lut[d3 >> 8 & 0xff] + _Math.lut[d3 >> 16 & 0xff] + _Math.lut[d3 >> 24 & 0xff];

		// .toUpperCase() here flattens concatenated strings to save heap memory space.
		return uuid.toUpperCase();
	}

	public static clamp(value: number, min: number, max: number): number {
		return Math.max(min, Math.min(max, value));
	}

	// compute euclidian modulo of m % n
	// https://en.wikipedia.org/wiki/Modulo_operation

	public static euclideanModulo(n: number, m: number): number {

		return ((n % m) + m) % m;

	}

	// Linear mapping from range <a1, a2> to range <b1, b2>

	public static mapLinear(x: number, a1: number, a2: number, b1: number, b2: number): number {

		return b1 + (x - a1) * (b2 - b1) / (a2 - a1);

	}

	// https://en.wikipedia.org/wiki/Linear_interpolation

	public static lerp(x: number, y: number, t: number): number {

		return (1 - t) * x + t * y;

	}

	// http://en.wikipedia.org/wiki/Smoothstep

	public static smoothstep(x: number, min: number, max: number): number {

		if (x <= min) return 0;
		if (x >= max) return 1;

		x = (x - min) / (max - min);

		return x * x * (3 - 2 * x);

	}

	public static smootherstep(x: number, min: number, max: number): number {

		if (x <= min) return 0;
		if (x >= max) return 1;

		x = (x - min) / (max - min);

		return x * x * x * (x * (x * 6 - 15) + 10);

	}

	// Random integer from <low, high> interval

	public static randInt(low: number, high: number): number {

		return low + Math.floor(Math.random() * (high - low + 1));

	}

	// Random float from <low, high> interval

	public static randFloat(low: number, high: number): number {

		return low + Math.random() * (high - low);

	}

	// Random float from <-range/2, range/2> interval

	public static randFloatSpread(range: number): number {

		return range * (0.5 - Math.random());

	}

	public static degToRad(degrees: number): number {

		return degrees * _Math.DEG2RAD;

	}

	public static radToDeg(radians: number): number {

		return radians * _Math.RAD2DEG;

	}

	public static isPowerOfTwo(value: number): boolean {

		return (value & (value - 1)) === 0 && value !== 0;

	}

	public static ceilPowerOfTwo(value: number): number {

		return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));

	}

	public static floorPowerOfTwo(value: number): number {

		return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));

	}
}
