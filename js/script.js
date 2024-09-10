"use strict";

import { fetchSuperheroes } from './utils/fetch-data.js';
import { displayTable } from './dom/display-table.js';
// import { setupSearch } from './dom/setup-search.js';
import { sortTable } from './dom/sort-table.js';
import { setupPagination } from './dom/setup-pagination.js';

export let superheroes = [];
export let currentPage = 1;
export let rowsPerPage = 20;
export let filteredData = [];

// Fetch superheroes and initialize the table
window.onload = async () => {
    superheroes = await fetchSuperheroes();
    filteredData = superheroes; // Start with all data
    displayTable();
    setupSearch();
    setupPagination();
    sortTable();
};

export const setupSearch = () => {
    // Get the search bar element
    const searchBar = document.getElementById('searchBar');
    
    // Add an input event listener to the search bar
    searchBar.addEventListener('input', (e) => {
        // Get the search query and convert it to lowercase
        const query = e.target.value.toLowerCase();
        
        // Filter superheroes based on the search query
        filteredData = superheroes.filter(hero =>
            hero.name.toLowerCase().includes(query)
        );
        
        // Reset to the first page of results
        currentPage = 1;
        
        // Update the table with the filtered data
        displayTable();
    });
};


