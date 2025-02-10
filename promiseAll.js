function all(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    if (promises.length === 0) {
      resolve(result);
      return;
    }
    let countPending = promises.length;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        result[index] = value;
        countPending--;
        if (countPending === 0) {
          resolve(result);
        }
      }, reject);
    });
  });
}
------------*********---------------

  async function all(promises) {
  const results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
  return results;
}

--------------*************-----------------


  // Simpe implementation on Promise all

  // A simple promise that resolves after a given time
const timeOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`)
    }, t)
  })
}

// Resolving a normal promise.
timeOut(1000)
 .then(result => console.log(result)) // Completed in 1000

// Promise.all
Promise.all([timeOut(1000), timeOut(2000)])
 .then(result => console.log(result)) // ["Completed in 1000", "Completed in 2000"]

---------------*-----

  You have to build an API that gets information from multiple third-party APIs and aggregates all the responses from the APIs.

  // Function to fetch Github info of a user.
const fetchGithubInfo = async (url) => {
  console.log(`Fetching ${url}`)
  const githubInfo = await axios(url) // API call to get user info from Github.
  return {
    name: githubInfo.data.name,
    bio: githubInfo.data.bio,
    repos: githubInfo.data.public_repos
  }
}

// Iterates all users and returns their Github info.
const fetchUserInfo = async (names) => {
  const requests = names.map((name) => {
    const url = `https://api.github.com/users/${name}`
    return fetchGithubInfo(url) // Async function that fetches the user info.
     .then((a) => {
      return a // Returns the user info.
      })
  })
  return Promise.all(requests) // Waiting for all the requests to get resolved.
}


fetchUserInfo(['sindresorhus', 'yyx990803', 'gaearon'])
 .then(a => console.log(JSON.stringify(a)))

/*
Output:
[{
  "name": "Sindre Sorhus",
  "bio": "Full-Time Open-Sourcerer ·· Maker ·· Into Swift and Node.js ",
  "repos": 996
}, {
  "name": "Evan You",
  "bio": "Creator of @vuejs, previously @meteor & @google",
  "repos": 151
}, {
  "name": "Dan Abramov",
  "bio": "Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.",
  "repos": 232
}]
*/

