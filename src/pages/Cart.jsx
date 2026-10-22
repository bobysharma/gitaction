
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Total quantity
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Delivery charge
  const deliveryCharge = totalPrice > 0 ? 10 : 0;

  // Final total
  const finalTotal = totalPrice + deliveryCharge;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-blue-600 font-semibold">
            Your Shopping Cart
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
            Shopping Cart
          </h1>

          {cartItems.length > 0 && (
            <p className="text-gray-500 mt-2">
              You have {totalItems} item
              {totalItems > 1 ? "s" : ""} in your cart.
            </p>
          )}
        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-sm p-12 text-center">

            <div className="text-7xl mb-6">
              🛒
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-3">
              Looks like you haven't added anything to your cart yet.
            </p>

            {/* React Router Link */}
            <Link
              to="/"
              className="inline-block mt-7 bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Continue Shopping
            </Link>

          </div>
        ) : (

          /* CART CONTENT */
          <div className="grid lg:grid-cols-3 gap-8">

            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-5">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 shadow-sm"
                >

                  <div className="flex flex-col sm:flex-row gap-5">

                    {/* IMAGE */}
                    <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">

                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-contain p-3"
                      />

                    </div>

                    {/* DETAILS */}
                    <div className="flex-1">

                      <div className="flex justify-between gap-4">

                        <div>
                          <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
                            {item.category}
                          </p>

                          <h2 className="text-lg font-bold text-gray-900 mt-1">
                            {item.title}
                          </h2>
                        </div>

                        {/* REMOVE */}
                        <button
                          onClick={() =>
                            dispatch(removeItem(item.id))
                          }
                          className="text-red-500 hover:text-red-700 text-sm font-semibold"
                        >
                          Remove
                        </button>

                      </div>

                      {/* PRICE */}
                      <p className="text-xl font-bold text-gray-900 mt-4">
                        ${item.price}
                      </p>

                      {/* QUANTITY */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">

                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden w-fit">

                          <button
                            onClick={() =>
                              dispatch(
                                decreaseQuantity(item.id)
                              )
                            }
                            className="w-10 h-10 flex items-center justify-center text-xl font-bold text-gray-700 hover:bg-gray-100"
                          >
                            −
                          </button>

                          <span className="w-12 text-center font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              dispatch(
                                increaseQuantity(item.id)
                              )
                            }
                            className="w-10 h-10 flex items-center justify-center text-xl font-bold text-gray-700 hover:bg-gray-100"
                          >
                            +
                          </button>

                        </div>

                        {/* ITEM TOTAL */}
                        <div className="text-right">

                          <p className="text-sm text-gray-500">
                            Item Total
                          </p>

                          <p className="text-xl font-bold text-blue-600">
                            $
                            {(
                              item.price * item.quantity
                            ).toFixed(2)}
                          </p>

                        </div>

                      </div>

                    </div>
                  </div>
                </div>

              ))}

            </div>

            {/* ORDER SUMMARY */}
            <div className="lg:col-span-1">

              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">

                <h2 className="text-xl font-bold text-gray-900">
                  Order Summary
                </h2>

                <div className="border-b my-5"></div>

                {/* ITEMS */}
                <div className="flex justify-between text-gray-600">
                  <span>
                    Items ({totalItems})
                  </span>

                  <span>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                {/* DELIVERY */}
                <div className="flex justify-between text-gray-600 mt-4">
                  <span>
                    Delivery
                  </span>

                  <span>
                    ${deliveryCharge.toFixed(2)}
                  </span>
                </div>

                <div className="border-b my-5"></div>

                {/* TOTAL */}
                <div className="flex justify-between items-center">

                  <span className="text-lg font-bold">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-blue-600">
                    ${finalTotal.toFixed(2)}
                  </span>

                </div>

                {/* CHECKOUT */}
                <button
                  onClick={() =>
                    alert("Checkout feature coming soon!")
                  }
                  className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Proceed to Checkout
                </button>

                {/* React Router Link */}
                <Link
                  to="/"
                  className="block text-center mt-4 text-blue-600 font-semibold hover:underline"
                >
                  ← Continue Shopping
                </Link>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;

