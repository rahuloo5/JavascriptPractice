export default function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}


// Although this approach is acceptable given the input object only contains null, boolean, number, string, you should be aware of the downsides of this approach:

// We can only copy non-symbol-keyed properties whose values are supported by JSON. Unsupported data types are simply ignored.
// JSON.stringify also has other a few surprising behaviors such as converting Date objects to ISO timestamp strings, NaN and Infinity becoming null etc.

export default function deepClone(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone(value)]),
  );
}
