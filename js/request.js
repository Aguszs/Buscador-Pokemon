
const requestCity = async (city) => {
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";
    const queryParams = `${city}`;

    try {
        const response = await fetch(baseURL + queryParams);
        const data = await response.json();
        return data;
    } catch (error) {
        showError();
    }
};