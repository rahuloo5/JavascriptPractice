function wrap(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      if (typeof prop === 'string' && /^[0-9]+$/.test(prop)) {
        prop = parseInt(prop);
      }
      if (typeof prop === 'number' && prop < 0) {
        prop += target.length;
      }
      return target[prop];
    },
    set(target, prop, value) {
      if (typeof prop === 'string' && /^[0-9]+$/.test(prop)) {
        prop = parseInt(prop);
      }
      if (typeof prop === 'number' && prop < 0) {
        prop += target.length;
      }
      target[prop] = value;
      return true;
    }
  });
}
