import { Interpolant } from '../Interpolant';

/**
 * Converted from three.js/CubicInterpolant.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */
export class DiscreteInterpolant {

init( parameterPositions, sampleValues, sampleSize, resultBuffer ) {

	Interpolant.call( this, parameterPositions, sampleValues, sampleSize, resultBuffer );

}

	interpolate_( i1 ) {

		return Interpolant.copySampleValue_( i1 - 1 );

	}
}
