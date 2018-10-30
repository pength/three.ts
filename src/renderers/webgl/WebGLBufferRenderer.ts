/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function WebGLBufferRenderer( gl, extensions, info, capabilities ) {

	var mode;

	export function setMode( value ) {

		mode = value;

	}

	export function render( start, count ) {

		gl.drawArrays( mode, start, count );

		info.update( count, mode );

	}

	export function renderInstances( geometry, start, count ) {

		var extension;

		if ( capabilities.isWebGL2 ) {

			extension = gl;

		} else {

			extension = extensions.get( 'ANGLE_instanced_arrays' );

			if ( extension === null ) {

				console.error( 'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' );
				return;

			}

		}

		extension[ capabilities.isWebGL2 ? 'drawArraysInstanced' : 'drawArraysInstancedANGLE' ]( mode, start, count, geometry.maxInstancedCount );

		info.update( count, mode, geometry.maxInstancedCount );

	}

	//

	this.setMode = setMode;
	this.render = render;
	this.renderInstances = renderInstances;

}


export { WebGLBufferRenderer };
