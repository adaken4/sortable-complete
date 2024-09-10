"use strict";

/**
 * Formats a powerstats object into a readable string.
 * 
 * @param {Object} stats - An object where keys are stat names and values are the corresponding numbers.
 * @returns {string} - A string where each stat is formatted as "key: value" and separated by commas.
 */
export function formatPowerstats(stats) {
    return Object.entries(stats)
        .map(([key, value]) => `${key}: ${value}`)  // Convert each [key, value] pair to a "key: value" string
        .join(', ');  // Join all the formatted strings with a comma and space
};
