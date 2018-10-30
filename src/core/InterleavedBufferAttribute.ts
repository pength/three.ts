
/**
 * Converted from three.js/Box2.js, If you want to see the js code source file, please go to https://threejs.org/
 * @author illegalDriver
 */

export function InterleavedBufferAttribute( interleavedBuffer, itemSize, offset, normalized ) {

	this.data = interleavedBuffer;
	this.itemSize = itemSize;
	this.offset = offset;

	this.normalized = normalized === true;

}

Object.defineProperties( InterleavedBufferAttribute.prototype, {

	count: {

		get() {

			return this.data.count;

		}

	}

	array: {

		get() {

			return this.data.array;

		}

	}

}

Object.assign( InterleavedBufferAttribute.prototype, {

	isInterleavedBufferAttribute: true,

	setX( index, x ) {

		this.data.array[ index * this.data.stride + this.offset ] = x;

		return this;

	}

	setY( index, y ) {

		this.data.array[ index * this.data.stride + this.offset + 1 ] = y;

		return this;

	}

	setZ( index, z ) {

		this.data.array[ index * this.data.stride + this.offset + 2 ] = z;

		return this;

	}

	setW( index, w ) {

		this.data.array[ index * this.data.stride + this.offset + 3 ] = w;

		return this;

	}

	getX( index ) {

		return this.data.array[ index * this.data.stride + this.offset ];

	}

	getY( index ) {

		return this.data.array[ index * this.data.stride + this.offset + 1 ];

	}

	getZ( index ) {

		return this.data.array[ index * this.data.stride + this.offset + 2 ];

	}

	getW( index ) {

		return this.data.array[ index * this.data.stride + this.offset + 3 ];

	}

	setXY( index, x, y ) {

		index = index * this.data.stride + this.offset;

		this.data.array[ index + 0 ] = x;
		this.data.array[ index + 1 ] = y;

		return this;

	}

	setXYZ( index, x, y, z ) {

		index = index * this.data.stride + this.offset;

		this.data.array[ index + 0 ] = x;
		this.data.array[ index + 1 ] = y;
		this.data.array[ index + 2 ] = z;

		return this;

	}

	setXYZW( index, x, y, z, w ) {

		index = index * this.data.stride + this.offset;

		this.data.array[ index + 0 ] = x;
		this.data.array[ index + 1 ] = y;
		this.data.array[ index + 2 ] = z;
		this.data.array[ index + 3 ] = w;

		return this;

	}

}


export { InterleavedBufferAttribute };
