import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { StoreContext } from "../Context_Reducer/StoreContext";
import { space } from "postcss/lib/list";
import { span } from "framer-motion/client";

const Navbar = () => {
  const { products } = useContext(StoreContext);
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-white font-bold text-lg ">
          <Link to="/"> فروشگاه ایرپات</Link>
        </div>
        <div>
          <Link to="/" className="text-white hover:text-gray-300 mr-4">
            خانه
          </Link>
        </div>

        <div className="relative">
          <Link to="card" className="text-white hover:text-gray-300">
            <BiShoppingBag className="" size={32} />
          </Link>
          {products.length === 0 ? (
            <span></span>
          ) : (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs py-0.5 px-1.5">
              {products.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
