import React from "react";

import { CartProvider } from "./context/CartProvider";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";


function App() {
  return (
    <CartProvider>
      <div style={{ padding: 40 }}>
        <h1>My Store</h1>
        <ProductList />
        <hr />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;