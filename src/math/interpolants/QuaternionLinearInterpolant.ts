import { Interpolant } from '../Interpolant';
import { Quaternion } from '../Quaternion';

/**
 * Converted from three.js/QuaternionLinearInterpolant.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */
export class QuaternionLinearInterpolant {

	init(parameterPositions, sampleValues, sampleSize, resultBuffer) {

		Interpolant.call(this, parameterPositions, sampleValues, sampleSize, resultBuffer);

	}

	interpolate_(i1, t0, t, t1) {

		var result = this.resultBuffer,
			values = this.sampleValues,
			stride = this.valueSize,

			offset = i1 * stride,

			alpha = (t - t0) / (t1 - t0);

		for (var end = offset + stride; offset !== end; offset += 4) {

			Quaternion.slerpFlat(result, 0, values, offset - stride, values, offset, alpha);

		}

		return result;

	}

}
