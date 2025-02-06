
// please complete the implementation
class EventEmitter {
  subscritions = {}
  subscribe(eventName, callback) {
  	if (!(eventName in this.subscritions)) {
      this.subscritions[eventName] = []
    }
    const callbacks = this.subscritions[eventName]
    callbacks.push(callback)
    return {
      release: () => {
        if (!(eventName in this.subscritions)) {
          return
        }
        const callbacks = this.subscritions[eventName]
        const index = callbacks.indexOf(callback)
        if (index < 0) return
        callbacks.splice(index, 1)
        if (callbacks.length === 0) {
          delete this.subscritions[eventName]
        }
      }
    }
  }
  
  emit(eventName, ...args) {
  	if (!(eventName in this.subscritions)) {
      return
    }
    for (const callback of this.subscritions[eventName]) {
      callback(...args)
    }
  }
}
