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

    console.log(number);
});