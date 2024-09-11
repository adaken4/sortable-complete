"use strict";

import { getState, setState } from "../state.js";
import { displayTable } from "./display-table.js";

/**
 * Sets up the search functionality for filtering superheroes.
 * 
 * Attaches an input event listener to the search bar to filter the displayed
 * superheroes based on the user's query and update the table.
 */
export const setupSearch = () => {
    // Get the search bar element
    const searchBar = document.getElementById('searchBar');
    
    // Add an input event listener to the search bar
    searchBar.addEventListener('input', (e) => {
        // Get the search query and convert it to lowercase
        const query = e.target.value.toLowerCase();
        const { superheroes  } = getState();
        
        // Filter superheroes based on the search query
        const filteredData = superheroes.filter(hero =>
            hero.name.toLowerCase().includes(query)
        );
        
        // Reset to the first page of results
        setState({ filteredData, currentPage: 1 });
        
        // Update the table with the filtered data
        displayTable();
    });
};
