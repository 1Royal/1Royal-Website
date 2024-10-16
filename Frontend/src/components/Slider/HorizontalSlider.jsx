import React from "react";
import Slider from "./Slider";
import { assets } from "../../assets/assets";
import Title from "../Title";

const images1 = [
  assets.slider_img_1,
  assets.slider_img_2,
  assets.slider_img_3,
  assets.slider_img_4,
  assets.slider_img_5,
  assets.slider_img_6,
  assets.slider_img_7,
  assets.slider_img_8,
  assets.slider_img_9,
  assets.slider_img_10,
  assets.slider_img_11,
  assets.slider_img_12,
  assets.slider_img_13,
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
        height={70}
        quantity={13}
        images={images1}
      />
    </div>
  );
};

export default HorizontalSlider;
