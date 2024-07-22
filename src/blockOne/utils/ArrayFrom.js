/**
 * Creates an array of a specified length, with each element being the index of that element.
 *
 * @param {number} itemsNbr - The number of items to include in the array.
 * @return {number[]} An array of numbers from 0 to `itemsNbr - 1`.
 */
const ArrayFrom = ( itemsNbr ) => {
	return Array.from( { length: itemsNbr }, ( _, index ) => index );
};

export default ArrayFrom;
