import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (produit, count) => {},
  removeItem: (produit, count) => {},
  clearAll: () => {},
});

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  function addItem(produit, count) {
    console.log("adding", produit, count);
    const index = items.findIndex((item) => item.id == produit);
    const old = [...items];
    if (index >= 0) {
      old[index].count += count;
    } else {
      old.push({
        id: produit,
        count: count,
      });
    }

    setItems(old);
    console.log(old);
  }
  function removeItem(produit, count) {
    console.log("removing", produit, count);
    const index = items.findIndex((item) => item.id == produit);
    if (index >= 0) {
      console.log(index);
      const old = [...items];
      old[index].count -= count;
      if (old[index].count <= 0) {
        old.splice(index, 1);
      }
      console.log("old", old);
      setItems(old);
    }
  }
  function clearAll() {
    console.log("clear");
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearAll,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
