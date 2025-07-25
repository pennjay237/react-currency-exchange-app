// Exchange rates (to USD)
const rates = {
  USD: 1,
  EUR: 1.24,
  XAF: 0.0016667 // 1 XAF = 1/600 USD
};

export const convertCurrency = (amount, fromCurrency, toCurrency) => {
  // Convert to USD first
  const amountInUSD = amount * rates[fromCurrency];
  
  // Convert from USD to target currency
  return amountInUSD / rates[toCurrency];
};

export const formatCurrency = (amount, currency) => {
  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
  return formatter.format(amount);
};

export const currencySymbols = {
  USD: '$',
  EUR: '€',
  FCFA: 'XAF'
};