const fetchRetryPlus = (url,options,retry)=>{
    fetch(url).then((res)=>{
        if(res.ok){
            return res.json()
        }
        if(retry>0){
            fetchRetryPlus(url,options,retry-1)
        }
        throw new Error(res.status)
    }).catch((err)=>{
        console.log(err,"error")
    })
}

const response = fetch("https://reqbin.com/echo/get/json", {
  method: "GET", // *GET, POST, PUT, DELETE, etc
  headers: {
    "Content-Type": "application/json", // header
  },
});
// driver code
response
  .then((response) => {
    const responseData = response.json();
    responseData.then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });

  response.then((response)=>response.json()).then((data)=>console.log(data,"data")).catch((err)=>{
    console.log(err,"erro")
  })

//   JavaScript promises have always been a major win for the language -- they've led to a revolution of asynchronous coding that has vastly improved performance on the web. One shortcoming of native promises is that there's no true way to cancel a fetch...until now. A new AbortController has been added to the JavaScript specification that will allow developers to use a signal to abort one or multiple fetch calls.

// Here's the flow of how canceling a fetch call works:

// Create an AbortController instance
// That instance has a signal property
// Pass the signal as a fetch option for signal
// Call the AbortController's abort property to cancel all fetches that use that signal.

const controller = new AbortController();
const { signal } = controller;

fetch("http://localhost:8000", { signal }).then(response => {
    console.log(`Request 1 is complete!`);
}).catch(e => {
    console.warn(`Fetch 1 error: ${e.message}`);
});

// Abort request
controller.abort();

//2

fetch("http://localhost:8000", { signal }).then(response => {
    console.log(`Request 1 is complete!`);
}).catch(e => {
    console.warn(`Fetch 1 error: ${e.message}`);
});

fetch("http://localhost:8000", { signal }).then(response => {
    console.log(`Request 2 is complete!`);
}).catch(e => {
    console.warn(`Fetch 2 error: ${e.message}`);
});

// Wait 2 seconds to abort both requests
setTimeout(() => controller.abort(), 2000);