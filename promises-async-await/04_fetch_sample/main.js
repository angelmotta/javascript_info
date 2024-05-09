// fetch return a promise
fetch("https://javascript.info/article/promise-chaining/user.json")
    .then((response) => response.json())
    // after receive userObj data from javascript.info
    // Make a requesto to Github
    .then((userObj) => fetch(`https://api.github.com/users/${userObj.name}`))
    .then((response) => response.json())
    .then((githubuser) => {
        console.log(githubuser);
        // modify DOM and show pic profile
        let img = document.createElement("img");
        img.src = githubuser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => img.remove(), 3000);
    });
