type Product = {
  name: string;
  price: number;
  quantity: number;
};

export function calculateTotalSalesWithTax(
  products: Product[],
  taxRate: number
): number {
  return products.reduce(
    (acc, n) => acc + n.price * n.quantity * (1 + taxRate / 100),
    0
  );
}
