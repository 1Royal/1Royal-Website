import React from "react";
import { assets } from "../assets/assets";

const FormOrder = ({ setShowForm, productId }) => {
  const handleSubmit = async (e) => {
    alert("We will contact you soon");
    e.preventDefault();
    setShowForm(false);

    const form = document.querySelector("form");
    const formData = new FormData(form);

    const apiLink =
      "https://script.google.com/macros/s/AKfycbzhDfu73SYU3blue-idORaM2x0GkmY6hzv58jwRR104iMQ7nJFSSr3Klb8RIraGK6usuQ/exec";
    const response = await fetch(apiLink, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Done");
    } else {
      console.error("Failed to submit");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-full max-w-lg p-5 rounded-md bg-zinc-200 shadow-lg">
        <h1 className="text-4xl lg:text-3xl font-bold text-gray-700 mb-2 flex justify-between items-center">
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

        <form action="" onSubmit={handleSubmit}>
          <input type="number" className="hidden" name="productId" value={productId} />
          <div className="flex flex-col gap-6">
            {/* Full Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
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

              <div>
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

            {/* Phone Number and City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
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

              <div>
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

            {/* Message */}
            <div>
              <textarea
                placeholder="Message"
                name="msg"
                id="msg"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none bg-white text-gray-700"
              ></textarea>
            </div>

            {/* Submit Button */}

            <div className="text-center mt-4">
              <input
                type="submit"
                value="Submit and we'll contact you!"
                className="w-full px-6 py-3  bg-gray-50 text-gray-700 hover:bg-gray-900 hover:text-gray-50 transition-all ease-linear border-gray-900 border font-semibold text-base sm:text-xl rounded-md cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOrder;
