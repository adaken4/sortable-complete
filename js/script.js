"use strict";

import { getState, setState } from './state.js';
import { fetchSuperheroes } from './utils/fetch-data.js';
import { displayTable } from './dom/display-table.js';
import { setupSearch } from './dom/setup-search.js';
import { sortTable } from './dom/sort-table.js';
import { setupPagination } from './dom/setup-pagination.js';

// export let superheroes = [];
// export let currentPage = 1;
// export let rowsPerPage = 20;
// export let filteredData = [];


// Fetch superheroes and initialize the table
window.onload = async () => {
    let { superheroes } = getState();
    superheroes = await fetchSuperheroes();
    setState({
        superheroes,
        filteredData: superheroes
    }); // Start with all data
    displayTable();
    setupSearch();
    setupPagination();
    sortTable();
};