import React from "react";
import Slider from "./Slider";
import { assets } from "../../assets/assets";
import Title from "../Title";

const images1 = [
  assets.p_1,
  assets.p_1,
  assets.p_1,
  assets.p_1,
  assets.p_1,
  assets.p_1,
  assets.p_1,
  assets.p_1,
  assets.p_1,
  assets.p_1,
];

const HorizontalSlider = () => {
  return (
    <div className="my-5">
      <h1 className="text-3xl text-center font-semibold my-7 text-gray-700">
        <Title text2={"We Deal With This Brands"} />
      </h1>
      <Slider
        className="my-5"
        width={200}
        height={200}
        quantity={10}
        images={images1}
      />
    </div>
  );
};

export default HorizontalSlider;
