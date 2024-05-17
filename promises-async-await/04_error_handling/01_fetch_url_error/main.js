fetch("https://no-such-server.blabla") // rejects
    .then((response) => response.json())
    .catch((err) => {
        console.log(`****`);
        console.log(err); // TypeError: Failed to fetch
        alert(err);
        console.log(`****`);
    });
