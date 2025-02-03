function shuffle(arr) {
  // modify the arr inline to change the order randomly
  for (let i = 0; i < arr.length; i++) {
        const randInd = 0 + Math.floor(Math.random() * (arr.length - i));
        [arr[randInd], arr[arr.length - (i + 1)]] = [arr[arr.length - (i + 1)], arr[randInd]]
    }
}
