/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function WebGLProperties() {

	var properties = new WeakMap();

	export function get( object ) {

		var map = properties.get( object );

		if ( map === undefined ) {

			map = {};
			properties.set( object, map );

		}

		return map;

	}

	export function remove( object ) {

		properties.delete( object );

	}

	export function update( object, key, value ) {

		properties.get( object )[ key ] = value;

	}

	export function dispose() {

		properties = new WeakMap();

	}

	return {
		get: get,
		remove: remove,
		update: update,
		dispose: dispose
	};

}


export { WebGLProperties };
