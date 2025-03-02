const CURRENCY_FORMATTER = new Intl.NumberFormat("en-NG", {
  currency: "NGN",
  style: "currency",
  minimumFractionDigits: 0,
});

export function formatCurrency(amount) {
  return CURRENCY_FORMATTER.format(amount);
}
