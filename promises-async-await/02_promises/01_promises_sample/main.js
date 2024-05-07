let promise = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed
    setTimeout(() => {
        let myrandNum = Math.random();
        if (myrandNum < 0.5) {
            return reject(new Error("sorry bro! something went wrong"));
        }
        return resolve("done bro!");
    }, 1000);
});

promise
    .then((result) => alert(result))
    .catch((error) => {
        console.log(`something went wrong bro!`);
        console.error(error);
        alert(error);
    })
    .finally(() => console.log(`Bye bye bro! (cleanup)`));
