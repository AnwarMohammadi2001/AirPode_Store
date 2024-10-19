import React, { useContext, useState } from "react";
import { StoreContext } from "../Context_Reducer/StoreContext";

const Product = ({ item }) => {
  const { addToCard } = useContext(StoreContext);
  const [showQuantity, setShowQuantity] = useState(false); // State to show the quantity section
  const [quantity, setQuantity] = useState(1); // State to track quantity

  const handleAdd = () => {
    addToCard({ ...item, quantity }); // Add item to cart with initial quantity
    setShowQuantity(true); // Show the quantity section
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity); // Update local state
    addToCard({ ...item, quantity: newQuantity }); // Update cart with new quantity
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      // Prevent quantity from going below 1
      const newQuantity = quantity - 1;
      setQuantity(newQuantity); // Update local state
      addToCard({ ...item, quantity: newQuantity }); // Update cart with new quantity
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-5 flex flex-col h-full">
        {/* Product Image */}
        <img
          src={item.image}
          alt={item.title}
          className="object-cover h-48 w-full rounded-md mb-4"
        />

        {/* Product Details */}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-right">
            {item.title}
          </h3>
          <p className="text-gray-600 text-right">قیمت: {item.price} Af</p>
        </div>

        {/* Quantity Section (appears above the button) */}
        {showQuantity && (
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={handleDecrease}
              className="bg-gray-300 text-gray-800 py-1 px-3 rounded hover:bg-gray-400 transition duration-300"
            >
              -
            </button>
            <span className="text-gray-800 mx-2">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-gray-300 text-gray-800 py-1 px-3 rounded hover:bg-gray-400 transition duration-300"
            >
              +
            </button>
          </div>
        )}

        {/* Add to Cart Button */}
        <div className="mt-4">
          <button
            onClick={handleAdd}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
