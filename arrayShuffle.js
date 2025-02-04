function shuffle(arr) {
  // modify the arr inline to change the order randomly
  for (let i = 0; i < arr.length; i++) {
        const randInd = 0 + Math.floor(Math.random() * (arr.length - i));
        [arr[randInd], arr[arr.length - (i + 1)]] = [arr[arr.length - (i + 1)], arr[randInd]]
    }
}



function shuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
