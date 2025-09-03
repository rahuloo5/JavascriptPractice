function getMaxPrices(entries) {
  const maxPrices = new Map();

  for (const [timestamp, price] of entries) {
    if (!maxPrices.has(timestamp)) {
      maxPrices.set(timestamp, price);
    } else {
      maxPrices.set(timestamp, Math.max(maxPrices.get(timestamp), price));
    }
  }

  return maxPrices;
}
