"use strict";

import { getState, setState } from '../state.js';
import { formatPowerstats } from '../utils/format-powerstats.js';
import { updatePageInfo } from './update-page-info.js'

/**
 * Displays filtered hero data in an HTML table.
 * 
 * This function populates the table with the ID 'heroTableBody' using data from the `filteredData` array,
 * respecting pagination settings (currentPage and rowsPerPage).
 */
export const displayTable = () => {
    // Get the table body element
    const tableBody = document.getElementById('heroTableBody');
    tableBody.innerHTML = ''; // Clear previous content
    let { currentPage, rowsPerPage, filteredData } = getState();
    // Calculate the slice range for pagination
    const start = (currentPage - 1) * rowsPerPage;
    const end = rowsPerPage === 'all' ? filteredData.length : start + rowsPerPage;
    const visibleData = filteredData.slice(start, end);

    // Populate the table with data
    visibleData.forEach(hero => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${hero.images.xs}" alt="${hero.name} icon"></td>
            <td>${hero.name}</td>
            <td>${hero.biography.fullName}</td>
            <td>${formatPowerstats(hero.powerstats)}</td>
            <td>${hero.appearance.race || 'Unknown'}</td>
            <td>${hero.appearance.gender}</td>
            <td>${hero.appearance.height[1]}</td>
            <td>${hero.appearance.weight[1]}</td>
            <td>${hero.biography.placeOfBirth || 'Unknown'}</td>
            <td>${hero.biography.alignment}</td>
        `;
        tableBody.appendChild(row);
    });

    updatePageInfo();
};
