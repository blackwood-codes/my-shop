import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    total
  } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          <strong>{item.name}</strong>
          <div>
            ${item.price} × {item.quantity}
          </div>

          <button onClick={() => decreaseQuantity(item.id)}>
            -
          </button>

          <button onClick={() => addToCart(item)}>
            +
          </button>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;