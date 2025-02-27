function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return new Promise((resolve, reject) => {
    let retryCount = 0
    const callFetcher = () => fetcher().then((data) => {
      resolve(data)
    }, (error) => {
      if (retryCount < maximumRetryCount) {
        callFetcher()
        retryCount += 1
      } else {
        reject(error)
      }
    })
    
    callFetcher()
  })
}
