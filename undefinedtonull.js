function undefinedToNull(arg) {
  if (typeof arg === 'undefined') return null;

  if (Array.isArray(arg)) return arg.map(each => undefinedToNull(each));

  if (typeof arg === 'object' && arg !== null) {
    return Object
      .entries(arg)
      .reduce((obj, [key, value]) => {
        obj[key] = undefinedToNull(value);
        return obj;
      }, {});
  }

  return arg;

}


