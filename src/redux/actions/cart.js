export const addToCart = (item) => {
  return {
      type: "add",
      item
  };
}
export const changeQtyInCart = (item) => {
  return {
      type: "change",
      item
  };
}
