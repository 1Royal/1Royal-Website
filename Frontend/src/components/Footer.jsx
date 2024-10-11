import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="mt-10 px-10 py-10 font-semibol text-gray-600 rounded-md hover:rounded-none transition-all ease-in-out text-xl bg-[#f3f0f0]">
      <div className="links">

        {/* Social Links */}
        <div className="social">
          <Title text2={"Social"} />
          <ul>
            <li className="mt-1">
              <Link>
                <img
                  src={assets.cart_icon}
                  className="w-5 min-w-5 inline"
                  alt=""
                />{" "}
                LinkedIn
              </Link>
            </li>
            <li className="mt-1">
              <Link>LinkedIn</Link>
            </li>
          </ul>
        </div>

        {/* Contact Links */}

        {/* Blogs / Blogger */}
      </div>
    </div>
  );
};

export default Footer;
