"use strict";

import { sortColumn } from "./sort-column.js";

/**
 * Initializes sorting functionality for the table headers.
 * 
 * Adds click event listeners to table headers (excluding the icons column) to sort the table data
 * based on the column clicked. The sorting order toggles between ascending and descending.
 */
export const sortTable = () => {
    // Get the table element
    const table = document.getElementById("heroTable");

    // Iterate over each table header cell
    table.querySelectorAll('th').forEach((th, columnIndex) => {
        // Skip the first column (icons) as it is not sortable
        if (columnIndex === 0) {
            return;
        }

        // Determine the data type based on header text
        const headerText = th.innerHTML.trim().toLowerCase();
        const dataType = (headerText === "height" || headerText === "weight") ? "numeric" : "string";
        th.setAttribute("data-type", dataType);

        // Add click event listener to sort the column
        th.addEventListener('click', () => {
            // Toggle the sorting order
            const currentOrder = th.getAttribute("data-order") || "desc";
            const newOrder = currentOrder === "desc" ? "asc" : "desc";
            th.setAttribute("data-order", newOrder);

            // Call the function to sort the table based on the column and order
            sortColumn(table, columnIndex, dataType, newOrder);
        });
    });
}
