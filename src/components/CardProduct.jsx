import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../Context_Reducer/StoreContext";

const CardProduct = ({ item }) => {
  const { removeFromCard, addToCard } = useContext(StoreContext);
  
  // Local state for quantity
  const [quantity, setQuantity] = useState(item.quantity || 1);

  // Update local quantity when item changes
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item]);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    addToCard({ ...item, quantity: newQuantity });
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      addToCard({ ...item, quantity: newQuantity });
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src={item?.image || "https://via.placeholder.com/150"}
          alt={item?.title || "Product Image"}
          className="w-32 h-32 object-cover mb-2"
        />
        <h2 className="text-lg font-semibold">{item?.title || "Product Title"}</h2>
        <p className="text-gray-500">${item?.price || "0.00"}</p>
        
        {/* Quantity Controls */}
        <div className="flex items-center mt-2">
          <button
            className="bg-gray-300 text-gray-800 px-2 py-1 rounded-l-lg hover:bg-gray-400"
            onClick={handleDecrease}
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            className="bg-gray-300 text-gray-800 px-2 py-1 rounded-r-lg hover:bg-gray-400"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
        
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={() => removeFromCard(item)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
