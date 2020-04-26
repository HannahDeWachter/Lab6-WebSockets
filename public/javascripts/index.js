const base_url = "https://websockets-hannah.herokuapp.com";

// PRIMUS LIVE
primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
        , min: 500 // Number: The minimum delay before we try reconnect.
        , retries: 10 // Number: How many times we should try to reconnect.
    }
});

primus.on('data', (json) => {
    if (json.action === "showStats") {
        document.querySelector(".countries").innerHTML = "";
        showNumbers(json.data);
    }
});

let showNumbers = (json) => {
    json.data.forEach(stat => {
        let div = document.createElement('div');
        let country = document.createElement('h1');
        let number = document.createElement('p');
        country.innerHTML = stat.country;
        number.innerHTML = stat.number;
        div.append(country);
        div.append(number);
        document.querySelector(".countries").append(div);
    });
}

fetch(base_url + '/api/v1/corona', {
    method: "get",
    headers: {
        'Content-Type': 'application/json'
    },
}).then(response => {
    return response.json();
}).then(json => {
    primus.write({
        "action": "showStats",
        "data": json
    });

    // showNumbers(json);
});