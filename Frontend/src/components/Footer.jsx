import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="mt-10 px-10 py-10 font-semibol text-gray-600 rounded-md hover:rounded-none transition-all ease-in-out text-xl bg-[#f3f0f0]">
      <div className="links flex sm:flex-row flex-col gap-5 justify-between">
        {/* Social Links */}
        <div>
          <Title text2={"Social"} />
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                to="https://www.facebook.com/people/1royal-Marine-LLP/61552103433876/"
                target="_blank"
                className="flex gap-2 hover:text-gray-900 transition-all"
              >
                <img
                  src={assets.social_facebook}
                  className="w-6 min-w-5 inline"
                  alt=""
                />
                FaceBook
              </Link>
            </li>

            <li>
              <Link
                to="https://www.linkedin.com/in/1royal-marine-llp-2580261b2/"
                target="_blank"
                className="flex gap-2 hover:text-gray-900 transition-all"
              >
                <img
                  src={assets.social_linkedIn}
                  className="w-6 min-w-5 inline"
                  alt=""
                />
                LinkedIn
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                to="https://x.com/RMarinellp"
                className="flex gap-2 hover:text-gray-900 transition-all"
              >
                <img
                  src={assets.social_twitter}
                  className="w-6 min-w-5 inline"
                  alt=""
                />
                X / Twitter
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                to="https://www.youtube.com/@1RoyalMarineLLPIndia"
                className="flex gap-2 hover:text-gray-900 transition-all"
              >
                <img
                  src={assets.social_yt}
                  className="w-6 min-w-5 inline"
                  alt=""
                />
                YouTube
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                to="https://in.pinterest.com/royalmarinellp/"
                className="flex gap-2 hover:text-gray-900 transition-all"
              >
                <img
                  src={assets.social_pinterest}
                  className="w-6 min-w-5 inline"
                  alt=""
                />
                Pinterest
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Links */}

        <div>
          <Title text2={"Contact"} />
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                target="_blank"
                to="mailto:royalmarinellp@gmail.com"
                className="flex gap-2 hover:text-gray-900 transition-all"
              >
                <img
                  src={assets.social_mail}
                  className="w-6 min-w-5 inline"
                  alt=""
                />
                Mail
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="https://web.whatsapp.com/send?phone=919913332005&text="
                className="flex gap-2 hover:text-gray-900 transition-all"
              >
                <img
                  src={assets.social_whatsapp}
                  className="w-6 min-w-5 inline"
                  alt=""
                />
                WhatsApp
              </Link>
            </li>
          </ul>
        </div>

        {/* Blogs / Blogger */}
        <div>
          <Title text2={"Blogs"} />
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                target="_blank"
                to="https://1royalmarinellp.blogspot.com/"
                className="flex font-semibold gap-2 hover:text-gray-900 transition-all"
              >
                <img
                  src={assets.social_blogger}
                  className="w-6 min-w-5 inline"
                  alt=""
                />
                Blogs / Blogger
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-5 flex flex-col sm:flex-row gap-5">
        {/* Address */}
        <div className="flex items-start gap-2 sm:w-1/2">
          <img
            className="w-6 pt-[3px] min-w-5 inline"
            src={assets.icon_location}
            alt=""
          />
          <p className="lg:w-1/2">
            Office No. 223/B, Shiva Blessing-2, Above Mall, Kalanala, Bhavnagar,
            Gujarat, India. PIN 364001
          </p>
        </div>
         
        {/* Useful Links */}
        <div className="sm:w-1/2 ">
          <ul className="sm:flex flex-wrap gap-4">
            <Link to="/"> <li className="font-semibold hover:text-gray-900 transition-all">Home</li></Link>
            <Link to="/allproducts"> <li className="font-semibold hover:text-gray-900 transition-all">All Products</li></Link>
            <Link to="/about"> <li className="font-semibold hover:text-gray-900 transition-all">About Us</li></Link>
            <Link to="/contact"> <li className="font-semibold hover:text-gray-900 transition-all">Contact Us</li></Link>
          </ul>
        </div>
      </div>

      {/* Copyright info */}
    </div>
  );
};

export default Footer;
