import { createContext } from "react";

//create a context
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

//provide the context to the app
