"use strict";

import { extractNumericValue } from "./extract-number.js";
import { standardiseUnit } from "./convert-unit.js";

/**
 * Processes a value based on its data type, handling blanks, numeric conversions, and string formatting.
 * @param {string} value - The value to process, which may be a blank, dash, or a number with a unit.
 * @param {string} dataType - The type of data ("numeric" or "string").
 * @returns {number|string|null} - The processed value, which could be a number (after conversion), a lowercase string, or null.
 */
export function processValue(value, dataType) {
    // Return null for blank or dash values
    if (value === "" || value === "-") return null;

    // Process numeric values
    if (dataType === "numeric") {
        // Remove commas from the value
        value = value.replace(/,/g, '');

        // Match the numeric value and optional unit
        const match = value.match(/^(\d+)\s*(cm|m|kg|tons)?$/);
        if (match) {
            // Extract the number and unit
            const number = extractNumericValue(match[1]);
            const unit = match[2];

            // Convert the number to a standard unit
            return standardiseUnit(number, unit);
        }
        return null; // Return null if the format doesn't match
    }

    // Process string values
    if (dataType === "string") {
        // Return the lowercase version of the string
        return value.toLowerCase();
    }

    // Return null if dataType is not recognized
    return null;
};
