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
