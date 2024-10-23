import React from "react";
import Slider from "./Slider";
import { assets } from "../../assets/assets";
import Title from "../Title";

const images1 = [
  assets.brandLogo.slider_img_1,
  assets.brandLogo.slider_img_2,
  assets.brandLogo.slider_img_3,
  assets.brandLogo.slider_img_4,
  assets.brandLogo.slider_img_5,
  assets.brandLogo.slider_img_6,
  assets.brandLogo.slider_img_7,
  assets.brandLogo.slider_img_8,
  assets.brandLogo.slider_img_9,
  assets.brandLogo.slider_img_10,
  assets.brandLogo.slider_img_11,
  assets.brandLogo.slider_img_12,
  assets.brandLogo.slider_img_13,
  assets.brandLogo.slider_img_14,
  assets.brandLogo.slider_img_15,
  assets.brandLogo.slider_img_16,
];
const images2 = [
  assets.brandLogo.slider_img_17,
  assets.brandLogo.slider_img_18,
  assets.brandLogo.slider_img_19,
  assets.brandLogo.slider_img_20,
  assets.brandLogo.slider_img_21,
  assets.brandLogo.slider_img_22,
  assets.brandLogo.slider_img_23,
  assets.brandLogo.slider_img_24,
  assets.brandLogo.slider_img_25,
  assets.brandLogo.slider_img_26,
  assets.brandLogo.slider_img_27,
  assets.brandLogo.slider_img_28,
  assets.brandLogo.slider_img_29,
  assets.brandLogo.slider_img_30,
  assets.brandLogo.slider_img_31,
  assets.brandLogo.slider_img_32,
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
      <Slider
        className="my-5"
        width={200}
        height={70}
        quantity={13}
        images={images2}
        reverse={true}
      />
    </div>
  );
};

export default HorizontalSlider;
