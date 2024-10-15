import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";

const AllProducts = () => {
  const { allProducts } = useContext(ShopContext);
  // console.log(allProducts)

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"ALL"} text2={"PRODUCTS"} />
        <p className="w-3/4 m-auto capitalize text-xs sm:text-sm md:text-base text-gray-600">
          marine machinery, ship stores & equipment
        </p>
      </div>

      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {allProducts.map((elem, i) => (
          <ProductItem
            key={i}
            id={elem.id}
            image={elem.images}
            name={elem.name}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
