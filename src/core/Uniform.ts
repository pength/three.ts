/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function Uniform( value ) {

	if ( typeof value === 'string' ) {

		console.warn( 'THREE.Uniform: Type parameter is no longer needed.' );
		value = arguments[ 1 ];

	}

	this.value = value;

}

Uniform.prototype.clone = export function () {

	return new Uniform( this.value.clone === undefined ? this.value : this.value.clone() );

};

export { Uniform };
