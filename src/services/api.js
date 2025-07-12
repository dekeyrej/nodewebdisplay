import axios from 'axios';

export const BaseURL = process.env.REACT_APP_API_URL || `http://${window.location.hostname}/api`;

/**
 * Fetch data from the API.
 * @returns {Promise<Object>} The fetched data or an empty object on failure.
 */
export async function fetchData(name) {
    console.log(`${BaseURL}/key/${name}`);
    try {
        const response = await fetch(`${BaseURL}/key/${name}`);
        if (!response.ok) {
            console.error(`Error fetching ${name} data: ${response.statusText}`);
            return {};
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching ${name} data: ${error.message}`);
        return {};
    }
}

export const clickHandler = (event) => {
    const URL = `${BaseURL}/webcontrol/${event.target.name}`;
    axios.put(URL);
};