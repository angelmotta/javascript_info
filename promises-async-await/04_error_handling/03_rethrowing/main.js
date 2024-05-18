// Sample 1
// the execution: catch -> then
// .catch() block finishes normally, so the next successful .then() handler is called.)
// new Promise((resolve, reject) => {
//     throw new Error("gg");
// })
//     .catch(function (error) {
//         // handle error
//         alert("The error is handled, continue normally");
//     })
//     .then(() => alert("Next successful handler runs"));

// Sample 2
// the execution: catch -> catch
new Promise((resolve, reject) => {
    throw new Error("gg x2");
})
    .catch((error) => {
        if (error instanceof URIError) {
            alert("Handle it");
        } else {
            alert("Can't handle such error");
            throw error; // rethrow the error (**)
        }
    })
    .then(() => {
        // this block does Not run
        console.log("doesn't run");
    })
    .catch((error) => {
        // The execution continue here (**)
        alert(`The unknown error has occurred: ${error}`);
    });
