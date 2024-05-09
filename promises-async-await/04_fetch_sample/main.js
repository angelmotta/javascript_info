/*
// fetch return a promise
fetch("https://javascript.info/article/promise-chaining/user.json")
    .then((response) => response.json())
    // after receive userObj data, make a request to Github (return a promise)
    .then((userObj) => fetch(`https://api.github.com/users/${userObj.name}`))
    .then((response) => response.json()) // response.json() return a promise
    .then(
        (githubuser) =>
            new Promise(function (resolve, reject) {
                console.log(githubuser);
                // modify DOM and show pic profile
                let img = document.createElement("img");
                img.src = githubuser.avatar_url;
                img.className = "promise-avatar-example";
                document.body.append(img);

                setTimeout(() => {
                    img.remove();
                    console.log(`img.remove() done`);
                    resolve(githubuser);
                }, 3000);
            })
    )
    .then((githubuser) =>
        alert(`Finished showing ${githubuser.name} info. Bye bro!`)
    );
*/

// Refactor
function getJsonData(url) {
    return fetch(url).then((response) => response.json()); // response.json() return a Promise
}

function getGithubUser(username) {
    return getJsonData(`https://api.github.com/users/${username}`);
}

function showAvatar(githubuser) {
    return new Promise(function (resolve, reject) {
        console.log(githubuser);
        // modify DOM to show Avatar
        let img = document.createElement("img");
        img.src = githubuser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            console.log(`img.remove() done`);
            resolve(githubuser);
        }, 3000);
    });
}

// Invoke async functions
getJsonData("https://javascript.info/article/promise-chaining/user.json")
    .then((userObj) => getGithubUser(userObj.name))
    // handler receive previous return as an argument
    .then(showAvatar) // same as:  .then((githubUser) => showAvatar(githubUser))
    .then((githubUser) =>
        alert(
            `Finished showing ${githubUser.name} info. Cleaninig all! Bye bro!`
        )
    );
