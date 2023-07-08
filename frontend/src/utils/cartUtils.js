export const addDecimals = num => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = state => {
  // calculate item's price
  // state.itemsPrice = Number(state.itemsPrice);
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // calculate shipping cost, if order is over $100, shipping is free else $10
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // calculate tax 15%
  state.taxPrice = addDecimals(Number((0.15 * state.itemPrice).toFixed(2)));

  // calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
