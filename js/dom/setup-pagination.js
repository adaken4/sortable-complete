"use strict";

import { getState, setState } from "../state.js";
import { displayTable } from "./display-table.js";

/**
 * Sets up pagination controls for navigating between pages and adjusting the page size.
 * 
 * Attaches event listeners to pagination controls to handle page navigation and page size changes.
 */
export const setupPagination = () => {
    let { currentPage, rowsPerPage, filteredData } = getState();
    // Get and set up the "Previous Page" button
    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            setState({ currentPage }); // Decrement page number if not on the first page
            displayTable(); // Update the table with the new page
        }
    });

    // Get and set up the "Next Page" button
    document.getElementById('nextPage').addEventListener('click', () => {
        if (currentPage * rowsPerPage < filteredData.length) {
            currentPage++;
            setState({ currentPage }); // Increment page number if not on the last page
            displayTable(); // Update the table with the new page
        }
    });

    // Get and set up the "Page Size" dropdown
    document.getElementById('pageSize').addEventListener('change', (e) => {
        rowsPerPage = e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10);
        currentPage = 1;
        setState({ currentPage, rowsPerPage });  // Reset to the first page when page size changes
        displayTable(); // Update the table with the new page size
    });
};
