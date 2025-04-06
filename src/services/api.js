const BaseURL = process.env.REACT_APP_API_URL || `http://${window.location.hostname}/api`;

const namesKeys = {
    NFL: 'nfl',
    MLB: 'mlb',
    Environment: 'environment',
}
/**
 * Fetch data from the API.
 * @returns {Promise<Object>} The fetched data or an empty object on failure.
 */
export async function fetchData(name) {
    // console.log(`${BaseURL}/${namesKeys[name]}`);
    try {
        const response = await fetch(`${BaseURL}/${namesKeys[name]}`);
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