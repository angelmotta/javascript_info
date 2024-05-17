new Promise((resolve, reject) => {
    // Executor function
    throw new Error("Whoops!"); // same as -> reject(new Error("Whoops!!"))
}).catch(alert); // Error window in browser: Whoops!

// Same as prev
// new Promise((resolve, reject) => {
//     reject(new Error("Whoops!!")); // explicit reject Promise
// }).catch(alert); // Error window in browser: Whoops!

new Promise((resolve, reject) => {
    resolve("ok");
})
    .then((result) => {
        blablaFunc(); // no such function (programming error)
    })
    .catch(alert); // ReferenceError: blablaFunc is not defined
