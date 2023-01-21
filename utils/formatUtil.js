export const calculateDiscount = (price, discount) => {
  const deduct = (price * discount) / 100;
  return Math.round(price - deduct);
};
