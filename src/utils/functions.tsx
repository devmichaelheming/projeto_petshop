// Função responsável em fazer a formatação de números em moedas
export const numberFormat = (value: number, currency: string) => {
  const formatValue = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency,
  }).format(value);

  return formatValue;
};
