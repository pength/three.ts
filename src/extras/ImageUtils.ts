/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

var ImageUtils = {

	getDataURL( image ) {

		var canvas;

		if ( image instanceof HTMLCanvasElement ) {

			canvas = image;

		} else {

			canvas = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );
			canvas.width = image.width;
			canvas.height = image.height;

			var context = canvas.getContext( '2d' );

			if ( image instanceof ImageData ) {

				context.putImageData( image, 0, 0 );

			} else {

				context.drawImage( image, 0, 0, image.width, image.height );

			}

		}

		if ( canvas.width > 2048 || canvas.height > 2048 ) {

			return canvas.toDataURL( 'image/jpeg', 0.6 );

		} else {

			return canvas.toDataURL( 'image/png' );

		}

	}

};

export { ImageUtils };
