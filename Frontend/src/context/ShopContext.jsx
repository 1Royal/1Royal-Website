import { createContext, useEffect } from "react";
import { useState } from "react";
import { products } from "../assets/assets";
import { allProducts } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // const currency = "$";
  // const deliveryFee = 10;

  const [tempAllProd, setTempAllProd] = useState(allProducts);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const toggleLike = async (prodId) => {
    setTempAllProd((prevProducts) =>
      prevProducts.map((product) =>
        product.id === prodId
          ? { ...product, isLiked: !product.isLiked }
          : product
      )
    );
    console.log(tempAllProd);
  };

  const value = {
    products,
    allProducts,
    // currency,
    // deliveryFee,

    search,
    setSearch,
    showSearch,
    setShowSearch,

    toggleLike,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
