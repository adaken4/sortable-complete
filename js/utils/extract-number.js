"use strict";

/**
 * Extracts the first numeric value from a string.
 * @param {string} value - The input string containing numeric values.
 * @returns {number|null} - The first numeric value found, or null if no numbers are found.
 */
export function extractNumericValue(value) {
    // Use a regular expression to find the first sequence of digits in the string
    const match = value.match(/\d+/);
    
    // If a match is found, convert it to a floating-point number and return it
    // Otherwise, return null
    return match ? parseFloat(match[0]) : null;
}
