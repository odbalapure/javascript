////////////////////////////////////////
// FETCH API

// consuming 3rd party APIs
// fetch('https://www.metaweather.com/api/location/44418/');
// if you simply run it - it prints FAILED TO LOAD error in the console
// the reason - SAME ORIGIN POLICY IN JS that prevents making AJAX request to domain different than our own
// CROSS ORIGIN RESOURCE sharing was developed to over come it. CORS must be implemented to consume third party APIs 

function getWeather(country) {
    // process the JSON response 
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(result => {
        console.log(result);
        // json() returns a PROMISE  
        // conversion might take some time hence it executes asynchronously
        return result.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    })
}

getWeather("india");

// async/await version of the above code
async function getWeatherAw(country) {
    try {
        const result = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
        console.log("Async await data:  ")
        const data = await result.json();

        return data;
    } catch(error) {
        console.log(`Error: ${error}`)
    }
}

let usa;
getWeatherAw("usa").then(data => {
    usa = data;
    console.log("Async await data: ")
    console.log(usa);
});










// Sample APIs"
// https://restcountries.eu/rest/v2/name/portugal
// http://ip-api.com/json
// fetch('')
//     .then(response => response.json())
//     .then(data => console.log(data))

// https://api.tiingo.com/tiingo/daily/GOOGL/prices?startDate=2019-1-1&endDate=2019-11-1&token=0e3bf1653ea9a3f33d06648dab584b14295de9de
