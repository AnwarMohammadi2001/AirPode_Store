import React, { useContext } from "react";
import { StoreContext } from "../Context_Reducer/StoreContext";
import CardProduct from "../components/CardProduct";
import { Link } from "react-router-dom";

const Card = () => {
  const { total, products } = useContext(StoreContext);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            سبد خرید شما
          </h2>
          <p className="text-lg font-semibold text-center text-gray-600 mt-2">
            مجموع قیمت: {total} AF
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          {products.length === 0 ? (
            <p className="text-center text-gray-500">سبد خرید شما خالی است.</p>
          ) : (
            products.map((product) => (
              <CardProduct item={product} key={product.id} />
            ))
          )}
        </div>
        {products.length > 0 && (
          <div className="mt-6 flex justify-end">
            <Link to="/">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                ادامه خرید
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
