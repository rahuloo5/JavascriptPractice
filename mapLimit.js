function getUserById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;
  setTimeout(() => {
    callback("User" + id)
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  executeMap(inputs, limit, iterateeFn).then(results => callback(results));
}

async function executeMap(inputs, limit, iterateeFn) {
  console.log(inputs,"inputs")
  let results = [];
  let i = 0;
  while (i < inputs.length) {
    let currentCall = [];
    while (currentCall.length < limit) {
      if (i < inputs.length) {
        currentCall.push(inputs[i++]);
      } else {
        break;
      }
    }
    console.log(currentCall,"currentCall")
    const currentResults = await Promise.all(currentCall.map(val => executeRequest(val, iterateeFn)));
    console.log(currentResults,"currentResults")
    currentResults.forEach(result => results.push(result));
  }
  return results;
}

function executeRequest(input, iterateeFn) {
  return new Promise(resolve => {
    iterateeFn(input, val => {
      resolve(val);
    });
  });
}

mapLimit([1,2,3,4,5], 2, getUserById, (allResults) => {
  console.log('output:', allResults) // ["User1", "User2", "User3", "User4", "User5"]
})
