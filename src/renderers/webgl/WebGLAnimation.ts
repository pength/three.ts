/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */
export function WebGLAnimation() {

	var context = null;
	var isAnimating = false;
	var animationLoop = null;

	export function onAnimationFrame( time, frame ) {

		if ( isAnimating === false ) return;

		animationLoop( time, frame );

		context.requestAnimationFrame( onAnimationFrame );

	}

	return {

		start() {

			if ( isAnimating === true ) return;
			if ( animationLoop === null ) return;

			context.requestAnimationFrame( onAnimationFrame );

			isAnimating = true;

		}

		stop() {

			isAnimating = false;

		}

		setAnimationLoop( callback ) {

			animationLoop = callback;

		}

		setContext( value ) {

			context = value;

		}

	};

}

export { WebGLAnimation };
