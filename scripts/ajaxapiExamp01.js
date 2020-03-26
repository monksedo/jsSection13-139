/////////////////////////////////////////////////////////////////////////////////
// Making AJAX Calls with Fetch and Promies
//

// Without Async Await
function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`)
        .then(result => {
            // console.log(result);
            return result.json();
        })
        .then(data => {
            // console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`)
        })
        .catch(error => console.log(error));
}
getWeather(2487956);
getWeather(44418);

// Async Await Example
async function getWeatherAwait(woeid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`);
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
        return data;
    } catch (error) {
        alert(error);
    }
}
getWeatherAwait(2487956);
getWeatherAwait(44418).then(data => {
    let dataLondon = data;
    console.log(dataLondon);
});