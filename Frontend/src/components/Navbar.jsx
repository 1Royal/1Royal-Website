import React from "react";
import { useState } from "react";

import { assets } from "../assets/assets";

import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <NavLink to="/">
        <div className="logo | text-2xl font-serif text-gray-700  ">
          1Royal
        </div>
      </NavLink>

      <ul className="hidden sm:flex gap-5 text-gray-700 ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>

        <NavLink to="/allproducts" className="flex flex-col items-center gap-1">
          <p>ALL PRODUCTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white leading-4 aspect-square rounded-full text-[10px]">
            10
          </p>
        </Link>

        <img
          src={assets.menu_bar_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Sidebar menu for smaller screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-2 p-3 border border-b-gray-300 border-t-0">
            <img src={assets.dropDown_icon} className="h-4 cursor-pointer" alt="" />
            <p className="cursor-pointer">Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-b-gray-300 border-t-0' to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-b-gray-300 border-t-0' to="/allproducts">ALL PRODUCTS</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-b-gray-300 border-t-0' to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-b-gray-300 border-t-0' to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
