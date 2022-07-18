import { createContext } from "react";

export default createContext({
  // aqui dentro, quais sao as propriedades que eu vou querer ter nesse meu objeto que é meu contexto

  cart: [],
  cartOpen: false,
  addProductToCart: (product) => undefined,
  changeProductQtyInCart: (cartProduct, qty) => undefined,
  clearCart: () => undefined,
  removeProductFromCart: (product) => undefined,
  toogleCartOpen: () => undefined,
});
