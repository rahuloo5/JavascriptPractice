class SDK {
  constructor(){
    // hold the events
    this.queue = [];

    // track the count
    this.count = 1;
  }

  // push event in the queue
  logEvent(ev) {
    this.queue.push(ev);
  }

  // function to delay the exection
  wait = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject every n % 5 time
      if(this.count % 5 === 0){
        reject();
      } else {
        resolve();
      }
    }, 1000);
  });

  // to send analytics
  // recursively send the events
  sendAnalytics = async function (){
    // if there are no events in the queue
    // stop execution
    if(this.queue.length === 0){
      return;
    }

    // get the first element from the queue
    const current = this.queue.shift();

    try {
      // delay
      await this.wait();

      // print the event
      // can perform any other operations as well like making api call
      console.log("Analytics sent " + current);

      // increase the count
      this.count++;
    } catch(e){

      // if exection fails
      console.log("-----------------------");
      console.log("Failed to send " + current);
      console.log("Retrying sending " + current);
      console.log("-----------------------");

      // reset the count
      this.count = 1;

      // push the event back into the queue
      this.queue.unshift(current);
    }finally{

      // recursively call the same function
      // to send the remaining
      this.sendAnalytics();
    }	
  }

  // start the execution
  send = async function(){
    this.sendAnalytics();
  }
}


Input:
const sdk = new SDK();

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");
sdk.logEvent("event 11");
sdk.logEvent("event 12");
sdk.logEvent("event 13");
sdk.logEvent("event 14");
sdk.logEvent("event 15");
sdk.logEvent("event 16");
sdk.logEvent("event 17");
sdk.logEvent("event 18");
sdk.logEvent("event 19");
sdk.logEvent("event 20");

sdk.send();

Output:
"Analytics sent event 1"
"Analytics sent event 2"
"Analytics sent event 3"
"Analytics sent event 4"
"-----------------------"
"Failed to send event 5"
"Retrying sending event 5"
"-----------------------"

"Analytics sent event 5"
"Analytics sent event 6"
"Analytics sent event 7"
"Analytics sent event 8"
"-----------------------"
"Failed to send event 9"
"Retrying sending event 9"
"-----------------------"

"Analytics sent event 9"
"Analytics sent event 10"
"Analytics sent event 11"
"Analytics sent event 12"
"-----------------------"
"Failed to send event 13"
"Retrying sending event 13"
"-----------------------"

"Analytics sent event 13"
"Analytics sent event 14"
"Analytics sent event 15"
"Analytics sent event 16"
"-----------------------"
"Failed to send event 17"
"Retrying sending event 17"
"-----------------------"

"Analytics sent event 17"
"Analytics sent event 18"
"Analytics sent event 19"
"Analytics sent event 20"
