///////////////////////////////////////////
// XMLHttPRequest

const getAllCountries = () => {
    const xhr = new XMLHttpRequest();
    // opening a request
    xhr.open("GET", "https://restcountries.eu/rest/v2/all");
    xhr.responseType = "json";

    // send request to the server
    // send is by default an asynchronous method
    xhr.send();

    // what to do when you get the data
    xhr.onload = () => {
        // converting JSON response to string
        // const countries = xhr.response;
        // console.log(JSON.stringify(countries));

        // converting JSON resposne to JS objects
        const countryObjs = xhr.response;
        // population < 10Cr and store result as array of { name: "name", population: 1234 } 
        const result = countryObjs.filter(country => country.population >= 10_00_00_000)
            .map(country => ({
                name: country.name,
                population: country.population
            }));
        console.log(result);
    }
}

getAllCountries();