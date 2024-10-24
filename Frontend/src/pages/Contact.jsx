import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("We will contact you soon");

    const form = document.querySelector("form");
    const formData = new FormData(form);

    // Log form data
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const apiLink =
      "https://script.google.com/macros/s/AKfycbwwlZIkTmf79FfM1wxYFSQalsIcmUcXTAPwymZamk6VmUo3i30ebqYWT8L91w6qRy-c/exec";
    const response = await fetch(apiLink, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Done");
    } else {
      console.error("Failed to submit");
    }
    form.reset();
  };

  return (
    <div>
      <div className="flex items-center justify-center p-5">
        <div className="w-full max-w-lg p-5 rounded-md bg-zinc-200 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-700 mb-2 flex justify-between items-center">
            Contact Us
          </h1>
          <h3 className="text-lg text-gray-600 mb-4">Let’s Get in Touch</h3>

          <form onSubmit={handleSubmit}>
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
                    className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
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
                    className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
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
                    type="text"
                    pattern="[0-9]{10}"
                    name="mobile"
                    id="mobile"
                    className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
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
                    className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
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
                  className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-4">
                <input
                  type="submit"
                  value="Submit and we'll contact you!"
                  className="w-full px-6 py-3 bg-gray-50 text-gray-700 hover:bg-gray-900 hover:text-gray-50 transition-all border-gray-900 border font-semibold rounded-md cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
