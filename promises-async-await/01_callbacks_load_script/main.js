let x = 6;

function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    // invoke the callback function received as a parameter
    script.onload = () => callback(null, script); // callback(error, success)
    script.onerror = () =>
        callback(new Error(`Ey bro! Script load error for ${src}`));
    document.head.append(script);
}

loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
    (error, script) => {
        if (error) {
            console.log(`Something went wrong bro!`);
            console.error(error); // `Ey bro! Script load error for ${src}`
        } else {
            console.log(`all good bro: running the callback`);
            // the callback runs after the script is loaded
            alert(`Cool, the script ${script.src} is loaded`);
            alert(_); // _ is a function declared in the loaded script
            console.log(`all right bye bro!`);
        }
    }
);
