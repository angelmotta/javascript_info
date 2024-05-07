function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () =>
            reject(new Error(`Bro Script load error for ${src}`));

        document.head.append(script);
    });
}

let promise = loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise.then(
    (script) => alert(`Cool bro! ${script.src} is loaded!`),
    (error) => alert(`Sorry bro! Error: ${error.message}`)
);

console.log(
    `This statement is execute without waiting the prev async operation`
);

// We can call .then() on a Promise as many times as we want.
promise.then((script) => alert(`We can register another handler, Hello!`));
