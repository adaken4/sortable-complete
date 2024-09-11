"use strict";

import { getState } from "../state.js";

/**
 * Updates the page information display to show the current page and total number of pages.
 */
export const updatePageInfo = () => {
    // Get the pageInfo element
    const pageInfo = document.getElementById('pageInfo');
    const { currentPage, rowsPerPage, filteredData } = getState();
    
    // Calculate the total number of pages
    let totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if ( isNaN(totalPages) ) {
        totalPages = 1;
    }
    
    // Set the text content to display current page and total pages
    pageInfo.innerText = `Page ${currentPage} of ${totalPages}`;
};
