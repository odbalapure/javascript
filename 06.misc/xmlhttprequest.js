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
        const jsObjs = xhr.response;
        jsObjs.forEach(country => {
            // countries with population < 10Cr
            if (country["population"] < 10000000) {
                console.log(country);
            }
        });

    }
}

getAllCountries();