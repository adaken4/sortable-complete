"use strict";

import { currentPage } from "../script.js";
import { filteredData } from "../script.js";
import { rowsPerPage } from "../script.js";

/**
 * Updates the page information display to show the current page and total number of pages.
 */
export const updatePageInfo = () => {
    // Get the pageInfo element
    const pageInfo = document.getElementById('pageInfo');
    
    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    
    // Set the text content to display current page and total pages
    pageInfo.innerText = `Page ${currentPage} of ${totalPages}`;
};
