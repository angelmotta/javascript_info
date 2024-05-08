class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        alert(resolve); // function() { [native code] }
        console.log(resolve); // function() { native code }
        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

new Promise((resolve) => resolve(1))
    .then((result) => {
        // JS engine checks the object returned by then
        // This object has a `callable` method named `then`, so it calls that
        // providing native functions `resolve` and `reject` as arguments (similar to an executor)
        return new Thenable(result);
    })
    .then(alert); // shows 2 after 1 sec

console.log(`thenable`);
