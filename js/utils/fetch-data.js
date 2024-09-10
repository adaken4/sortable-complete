"use strict";

// Asynchronous function to fetch superhero data from an API
export const fetchSuperheroes = async () => {
    try {
        // Make a network request to the specified URL to fetch superhero data
        const response = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json');
        
        // Parse the JSON response from the API
        const data = await response.json();
        
        // Return the parsed data (list of superheroes)
        return data;
    } catch (error) {
        // Log any errors that occur during the fetch or JSON parsing process
        console.error("Error fetching superhero data:", error);
    }
};
