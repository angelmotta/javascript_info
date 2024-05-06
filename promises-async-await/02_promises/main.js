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

console.log(promise);
