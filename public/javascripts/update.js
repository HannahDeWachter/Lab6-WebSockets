const base_url = "";

// PRIMUS LIVE
primus = Primus.connect("http://localhost:3000", {
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

    fetch('http://localhost:3000/api/v1/corona/updatestats', {
        method: "put",
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            "country": country,
            "number": number
        })
    });
});