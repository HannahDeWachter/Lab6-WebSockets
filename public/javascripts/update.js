const base_url = "http://localhost:3000";

// PRIMUS LIVE
primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
        , min: 500 // Number: The minimum delay before we try reconnect.
        , retries: 10 // Number: How many times we should try to reconnect.
    }
});

document.querySelector("#update").addEventListener("click", function () {
    let number = document.querySelector("#number").value;
    let country = document.querySelector("#country").value;

    // console.log(number);
    // console.log(country);

    fetch(base_url + '/api/v1/corona/updatestats', {
        method: "put",
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            "country": country,
            "number": number
        })
    }).then(json => {
        document.querySelector("#number").value = "";
        primus.write({
            "action": "addStats",
        });
    });
});