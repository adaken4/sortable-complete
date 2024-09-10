"use strict";

import { processValue } from "../utils/process-value.js";
import { compareValues } from "../utils/compare-values.js";
/**
 * Sorts the rows of a table based on a specified column index and sort order.
 * 
 * @param {HTMLTableElement} table - The table element to be sorted.
 * @param {number} columnIndex - The index of the column to sort by.
 * @param {string} dataType - The type of data in the column ('numeric' or 'string').
 * @param {string} order - The sort order ('asc' for ascending, 'desc' for descending).
 */
export const sortColumn = (table, columnIndex, dataType, order) => {
    let switching = true;
    let switchCount = 0;

    while (switching) {
        switching = false;
        const rows = table.rows;

        // Loop through all rows except the header
        for (let i = 1; i < rows.length - 1; i++) {
            const [xCell, yCell] = [rows[i].getElementsByTagName("td")[columnIndex], rows[i + 1].getElementsByTagName("td")[columnIndex]];

            // Get and process the values for comparison
            const xValue = xCell.innerHTML.trim();
            const yValue = yCell.innerHTML.trim();
            const xProcessed = processValue(xValue, dataType);
            const yProcessed = processValue(yValue, dataType);

            // Determine if rows should be switched
            if (compareValues(xProcessed, yProcessed, order)) {
                // Perform the switch
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchCount++;
                break; // Start from the beginning
            }
        }
    }
};
