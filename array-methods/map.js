const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceObjs = prices.map((element) => ({
  price: element,
  salePrice: element / 2,
}));

const formattedPrices = prices.map((element) => `$${element}`);

console.log('Price objects', priceObjs);
console.log('Formatted prices', formattedPrices);
