let mypromise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})
    .then(function (result) {
        alert(result); // 1
        // A handler can create and return a Promise
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 3000);
        });
    })
    .then(function (result) {
        alert(result); // 2
        return result * 2;
    })
    .then(function (result) {
        alert(result); // 4
        return result * 2;
    });
