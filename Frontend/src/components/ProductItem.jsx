import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name }) => {
  //   const { currency } = useContext(ShopContext);
  return (
    <Link
      className="text-gray-700 cursor-pointer h-[80%]"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden bg-gray-200 h-[60%] md:h-full ">
        <img
          className="hover:scale-110 transition-all h-full ease-in-out rounded-md w-full aspect-auto"
          loading="lazy"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-base h-[40%] font-semibold">{name}</p>
    </Link>
  );
};

export default ProductItem;
