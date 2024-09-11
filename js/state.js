"use strict";

let state = {
    superheroes: [],
    currentPage: 1,
    rowsPerPage: 20,
    filteredData: []
};

export const getState = () => state;
export const setState = (newState) => Object.assign(state, newState);