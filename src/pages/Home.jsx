
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { fetchProduct } from "../ProductSlice";
import { addItem,increaseQuantity,decreaseQuantity } from "../redux/CartSlice";
import { fetchProduct } from "../redux/ProductSlice";

// import {
//   addItem,
//   increaseQuantity,
//   decreaseQuantity,
// } from "../CartSlice";

const Home = () => {
  const dispatch = useDispatch();

  // Products from Redux
  const { item, loading, error } = useSelector(
    (state) => state.product
  );

  // Cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Fetch products
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-5">
              🛍️ Welcome to Shopka
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Shop Smart.
              <br />
              Live Better.
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-xl">
              Discover amazing products at great prices.
              Add your favorite products to the cart and
              enjoy a simple shopping experience.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#products"
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Shop Now
              </a>

              <a
                href="#features"
                className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center">
              <div className="text-8xl">🛒</div>

              <h2 className="text-2xl font-bold mt-5">
                Easy Shopping
              </h2>

              <p className="text-blue-100 mt-2">
                Add, increase or decrease products directly
                from the home page.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Shop With Us?
            </h2>

            <p className="text-gray-500 mt-3">
              Everything you need for a better shopping experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="p-6 rounded-2xl bg-blue-50 text-center">
              <div className="text-4xl mb-4">🚚</div>

              <h3 className="font-bold text-lg">
                Fast Delivery
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Get your products delivered quickly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-green-50 text-center">
              <div className="text-4xl mb-4">💳</div>

              <h3 className="font-bold text-lg">
                Secure Payment
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Safe and secure payment experience.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-yellow-50 text-center">
              <div className="text-4xl mb-4">⭐</div>

              <h3 className="font-bold text-lg">
                Quality Products
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Find products with great ratings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50 text-center">
              <div className="text-4xl mb-4">🔄</div>

              <h3 className="font-bold text-lg">
                Easy Shopping
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Easily manage your cart and quantities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-10">

            <div>
              <p className="text-blue-600 font-semibold">
                Our Collection
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
                Popular Products
              </h2>
            </div>

            <p className="text-gray-500">
              Choose your favorite products.
            </p>

          </div>

          {/* ================= LOADING ================= */}
          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl p-4 shadow-sm animate-pulse"
                >
                  <div className="h-52 bg-gray-200 rounded-xl"></div>

                  <div className="h-5 bg-gray-200 rounded mt-5"></div>

                  <div className="h-4 bg-gray-200 rounded mt-3 w-2/3"></div>

                  <div className="h-10 bg-gray-200 rounded mt-5"></div>
                </div>
              ))}

            </div>
          )}

          {/* ================= ERROR ================= */}
          {error && !loading && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-5 rounded-xl text-center">
              <p className="font-semibold">
                Failed to load products
              </p>

              <p className="text-sm mt-1">
                {error}
              </p>
            </div>
          )}

          {/* ================= PRODUCT LIST ================= */}
          {!loading && !error && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {item.map((product) => {

                // Check whether product already exists in cart
                const cartProduct = cartItems.find(
                  (cartItem) => cartItem.id === product.id
                );

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
                  >

                    {/* IMAGE */}
                    <div className="relative bg-gray-100 h-60 flex items-center justify-center overflow-hidden">

                      {/* Discount */}
                      {product.discountPercentage && (
                        <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          -
                          {Math.round(
                            product.discountPercentage
                          )}
                          %
                        </span>
                      )}

                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-contain p-5 group-hover:scale-105 transition duration-300"
                      />

                    </div>

                    {/* PRODUCT DETAILS */}
                    <div className="p-5">

                      {/* CATEGORY */}
                      <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
                        {product.category}
                      </p>

                      {/* TITLE */}
                      <h3 className="font-bold text-lg text-gray-900 mt-2 line-clamp-1">
                        {product.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-sm text-gray-500 mt-2 line-clamp-2 min-h-10">
                        {product.description}
                      </p>

                      {/* RATING */}
                      <div className="flex items-center gap-2 mt-4">

                        <span className="text-yellow-500">
                          ★
                        </span>

                        <span className="font-semibold text-sm">
                          {product.rating}
                        </span>

                        <span className="text-gray-400 text-sm">
                          rating
                        </span>

                      </div>

                      {/* PRICE */}
                      <div className="flex items-center justify-between mt-4">

                        <div>
                          <span className="text-2xl font-bold text-gray-900">
                            ${product.price}
                          </span>

                          {product.discountPercentage && (
                            <span className="text-sm text-gray-400 line-through ml-2">
                              $
                              {Math.round(
                                product.price /
                                  (1 -
                                    product.discountPercentage /
                                      100)
                              )}
                            </span>
                          )}
                        </div>

                      </div>

                      {/* ================= CART CONTROLS ================= */}

                      <div className="mt-5">

                        {cartProduct ? (

                          // Product already in cart
                          <div className="flex items-center justify-between bg-blue-600 text-white rounded-xl overflow-hidden">

                            {/* MINUS */}
                            <button
                              onClick={() =>
                                dispatch(
                                  decreaseQuantity(product.id)
                                )
                              }
                              className="w-12 h-11 flex items-center justify-center text-2xl font-bold hover:bg-blue-700 transition"
                            >
                              −
                            </button>

                            {/* QUANTITY */}
                            <span className="font-bold text-lg">
                              {cartProduct.quantity}
                            </span>

                            {/* PLUS */}
                            <button
                              onClick={() =>
                                dispatch(
                                  increaseQuantity(product.id)
                                )
                              }
                              className="w-12 h-11 flex items-center justify-center text-2xl font-bold hover:bg-blue-700 transition"
                            >
                              +
                            </button>

                          </div>

                        ) : (

                          // Product not in cart
                          <button
                            onClick={() =>
                              dispatch(addItem(product))
                            }
                            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                          >
                            Add to Cart
                          </button>

                        )}

                      </div>

                    </div>
                  </div>
                );
              })}

            </div>
          )}

        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Stay Updated
          </h2>

          <p className="text-gray-400 mt-3">
            Subscribe to receive the latest products and offers.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-xl text-gray-900 bg-white outline-none"
            />

            <button className="bg-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <div>
              <h2 className="text-xl font-bold text-blue-600">
                Shopka
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Smart shopping made simple.
              </p>
            </div>

            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Shopka. All rights reserved.
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
};

export default Home;

