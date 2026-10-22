
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartLink = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link
      to="/cart"
      className="relative text-gray-700 font-medium hover:text-blue-600 transition"
    >
      Cart

      {cartCount > 0 && (
        <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartLink;

