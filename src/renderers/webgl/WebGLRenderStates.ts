/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

import { WebGLLights } from './WebGLLights';

export function WebGLRenderState() {

	var lights = new WebGLLights();

	var lightsArray = [];
	var shadowsArray = [];

	export function init() {

		lightsArray.length = 0;
		shadowsArray.length = 0;

	}

	export function pushLight( light ) {

		lightsArray.push( light );

	}

	export function pushShadow( shadowLight ) {

		shadowsArray.push( shadowLight );

	}

	export function setupLights( camera ) {

		lights.setup( lightsArray, shadowsArray, camera );

	}

	var state = {
		lightsArray: lightsArray,
		shadowsArray: shadowsArray,

		lights: lights
	};

	return {
		init: init,
		state: state,
		setupLights: setupLights,

		pushLight: pushLight,
		pushShadow: pushShadow
	};

}

export function WebGLRenderStates() {

	var renderStates = {};

	export function get( scene, camera ) {

		var renderState;

		if ( renderStates[ scene.id ] === undefined ) {

			renderState = new WebGLRenderState();
			renderStates[ scene.id ] = {};
			renderStates[ scene.id ][ camera.id ] = renderState;

		} else {

			if ( renderStates[ scene.id ][ camera.id ] === undefined ) {

				renderState = new WebGLRenderState();
				renderStates[ scene.id ][ camera.id ] = renderState;

			} else {

				renderState = renderStates[ scene.id ][ camera.id ];

			}

		}

		return renderState;

	}

	export function dispose() {

		renderStates = {};

	}

	return {
		get: get,
		dispose: dispose
	};

}


export { WebGLRenderStates };
