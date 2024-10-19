import React from "react";
import { productData } from "../data/Data";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto font-semibold">
        <h1 className="text-2xl text-center py-5">
          به فروشگاه ایرپات خوش آمدید
        </h1>
        <div className="flex flex-col lg:grid grid-cols-4 gap-5">
          {productData.map((item, id) => (
            <Product item={item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
