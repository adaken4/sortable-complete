"use strict";

/**
 * Compares two values based on a specified order.
 * @param {number|null|string} x - The first value to compare.
 * @param {number|null|string} y - The second value to compare.
 * @param {string} order - The order to use for comparison ("asc" for ascending, "desc" for descending).
 * @returns {boolean} - Returns true if `x` should come before `y` based on the order, otherwise false.
 */
export function compareValues(x, y, order) {
    // If x is null and y is not, x should come after y
    if (x === null && y !== null) return true;
    
    // If y is null and x is not, x should come before y
    if (x !== null && y === null) return false;

    // If both are null, they are considered equal, so return false
    if (x === null && y === null) return false;

    // If both values are not null, compare them based on the specified order
    if (x !== null && y !== null) {
        return order === "asc" ? x > y : x < y;
    }

    // Default case (shouldn't be reached if inputs are valid)
    return false;
};
