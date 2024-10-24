import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import FormOrder from "../components/FormOrder";

const Product = () => {
  const { productId } = useParams();
  const { allProducts, toggleLike } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const fetchProductData = async () => {
    allProducts.map((elem) => {
      if (elem.id == productId) {
        setProductData(elem);
        setImage(elem.images[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, allProducts]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100">
      {/* Product images and data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* Product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex flex-row gap-1 md:flex-col overflow-x-auto overflow-y-scroll max-h-[70vh] justify-between sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full">
            {productData.images.map((elem, index) => {
              return (
                <img
                  onClick={() => setImage(elem)}
                  src={elem}
                  key={index}
                  className="w-[24%] sm:w-full  border border-gray-700 sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt={`product img ${index}`}
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="main img" />
          </div>
        </div>

        {/* Product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <p className="text-lg ">{productData.description}</p>

          {/* Contact info */}
          <div>
            <div className="flex flex-col items-start mt-4">
              <p className="text-xs opacity-95 uppercase">
                Call Us for Details
              </p>
              <div className="text-lg font-semibold flex flex-col md:flex-col gap-3">
                <p>+91 9426831011</p>
              </div>
            </div>

            <div className="flex flex-col items-start mt-4">
              <p className="text-xs opacity-95 uppercase">
                Mail Us for Details
              </p>
              <div className="text-lg font-semibold flex flex-col md:flex-col gap-3">
                <p>sales@1royalmarinellp.com</p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex flex-col md:flex-col items-start mt-4">
              <div
                onClick={() => setShowForm(true)}
                className="w-full md:w-auto bg-gray-50 text-gray-700 hover:bg-gray-900 hover:text-gray-50 transition-all ease-linear border-gray-900 border font-semibold text-xl px-4 py-2 text-center"
              >
                Add to Cart & Contact Us
              </div>
            </div>

            {showForm ? (
              <FormOrder setShowForm={setShowForm} productId={productId} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
