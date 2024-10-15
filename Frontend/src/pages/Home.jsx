import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import { Link } from "react-router-dom";
import HorizontalSlider from "../components/Slider/HorizontalSlider";
import { assets } from "../assets/assets";
import Subscribe from "../components/subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <div className="flex items-center justify-center">
        <Link to="/allproducts">
          <button className="px-10 py-2 font-semibold uppercase text-gray-600  rounded-md hover:rounded-none transition-all ease-in-out text-xl bg-[#f3f0f0]">
            all products
          </button>
        </Link>
      </div>
      <HorizontalSlider />
      <Subscribe />
    </div>
  );
};

export default Home;
