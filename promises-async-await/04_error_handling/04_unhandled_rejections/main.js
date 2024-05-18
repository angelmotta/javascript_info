window.addEventListener("unhandledrejection", function (event) {
    // the event object has two special properties:
    // console.log(event);
    alert(event.promise); // [object Promise] - the promise that generated the error
    alert(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise((resolve, reject) => {
    noSuchFunc(); // Error here -> Uncaught (in promise) ReferenceError: noSuchFunc is not defined
}).then(() => {
    console.log(`successful promise handlers: not executed`);
}); // no catch()
