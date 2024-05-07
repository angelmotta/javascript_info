// My initial approach
// function delay(ms) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => resolve(`runs after ${ms} ms`), ms);
//     });
// }

// My tweaked approach based on the original solution shown
function delay(ms) {
    return new Promise((resolve) =>
        setTimeout(() => resolve(`runs after ${ms} ms`), ms)
    );
}

delay(5000).then((result) => alert(result));

// Solution proposed
// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert("runs after 3 seconds"));
