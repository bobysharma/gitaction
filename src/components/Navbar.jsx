
import { Link } from "react-router-dom";
import CartLink from "./CartLink";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          Shopka
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Products
          </Link>

          {/* Cart Component */}
          <CartLink />

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

