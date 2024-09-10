"use strict";

/**
 * Converts a value to a standard unit based on the given unit.
 * @param {number} value - The value to convert.
 * @param {string} unit - The unit of the value (e.g., "kg", "tons", "cm", "m").
 * @returns {number} - The value converted to the standard unit.
 */
export function standardiseUnit(value, unit) {
    // Convert units to the standard unit (e.g., kilograms or centimeters)
    switch (unit) {
        case "tons":
            return value * 1000; // Convert tons to kilograms (assuming metric ton)
        case "m":
            return value * 100; // Convert meters to centimeters
        case "kg":
        case "cm":
        default:
            return value; // Return value as-is for kilograms and centimeters, or if the unit is unrecognized
    }
}
