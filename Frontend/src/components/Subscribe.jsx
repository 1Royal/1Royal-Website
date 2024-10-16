import React from "react";
import BTN from "./BTN";
import Title from "./Title";

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center my-10">
      <p className="text-2xl font-medium text-gray-800 capitalize mt-5">
        <Title
          className="text-3xl font-medium text-gray-800 capitalize mt-5"
          text1={"subscribe"}
          text2={"now"}
        />
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 flex flex-col sm:flex-row border-0 sm:border  items-center gap-3 mx-auto my-6 pl-3  "
      >
        <input
          className="w-full  p-2 sm:flex-1 outline-none border sm:border-0"
          required
          type="email"
          placeholder="Your email (e.g., name@domain.com)"
        />
        <button
          type="submit"
          className="w-full sm:w-[40%]  bg-gray-50 text-gray-700 hover:bg-gray-900 hover:text-gray-50 transition-all ease-linear border-gray-900 border font-semibold text-xl px-2 py-2"
        >
          subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
