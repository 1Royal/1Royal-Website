import React from "react";
import { assets } from "../assets/assets";

const FormOrder = ({ setShowForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-1/3 p-5 rounded-md bg-zinc-200 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-2 flex justify-between items-center">
          Fill in Your Details to Continue!
          <div onClick={() => setShowForm(false)}>
            <img
              src={assets.cross_icon}
              className="w-6 cursor-pointer bg-white p-1 rounded-full"
              alt=""
            />
          </div>
        </h1>
        <h3 className="text-lg text-gray-600 mb-4">
          Just a few details so we can assist with your order.
        </h3>

        <form action="">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-5">
              {/* name */}
              <div className="w-1/2">
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md bg-white text-gray-700"
                  placeholder="Enter your name"
                />
              </div>

              {/* email */}
              <div className="w-1/2">
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email Address:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md bg-white text-gray-700"
                  placeholder="Your email"
                />
              </div>
            </div>

            {/* mobile */}
            <div className="flex items-center gap-5">
              <div className="w-1/2">
                <label htmlFor="mobile" className="block text-gray-700 mb-1">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md bg-white text-gray-700"
                  placeholder="Your phone number"
                />
              </div>

              {/* city */}
              <div className="w-1/2">
                <label htmlFor="city" className="block text-gray-700 mb-1">
                  City:
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md bg-white text-gray-700"
                  placeholder="Your city"
                />
              </div>
            </div>
            <div>
              <textarea
                placeholder="Message"
                name="msg"
                id="msg"
                rows={5}
                className="w-full px-3 py-2 rounded-md outline-none"
              ></textarea>
            </div>
            <div className="text-center mt-4">
              <input
                type="submit"
                value="Submit and we'll contact you!"
                className="w-full sm:w-[40%]  bg-gray-50 text-gray-700 hover:bg-gray-900 hover:text-gray-50 transition-all ease-linear border-gray-900 border font-semibold text-xl px-2 py-2 cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOrder;
