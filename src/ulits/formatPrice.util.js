export const formatCurrency = (value) => {
  const formattedValue = parseFloat(value).toFixed(2);
  return `${formattedValue} PLN`;
};
