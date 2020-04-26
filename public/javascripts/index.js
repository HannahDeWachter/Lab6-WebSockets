const base_url = "";

// PRIMUS LIVE
primus = Primus.connect("http://localhost:3000", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
        , min: 500 // Number: The minimum delay before we try reconnect.
        , retries: 10 // Number: How many times we should try to reconnect.
    }
});

let parent = document.querySelector(".countries");

let showNumbers = (json) => {
    json.data.forEach(stat => {
        let child = document.createElement('div');
        let country = document.createElement('h1');
        let number = document.createElement('p');
        country.innerHTML = stat.country;
        number.innerHTML = stat.number;
        child.append(country);
        child.append(number);
        parent.append(child);
    });
}

fetch('http://localhost:3000/api/v1/corona', {
    method: "get",
    headers: {
        'Content-Type': 'application/json'
    },
}).then(response => {
    return response.json();
}).then(json => {
    showNumbers(json);
});