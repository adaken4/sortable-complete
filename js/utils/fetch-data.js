"use strict";

export const fetchSuperheroes = async () => {
    try {
        const response = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching superhero data:", error);
    }
};