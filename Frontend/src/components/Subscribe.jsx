import React from "react";

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800 capitalize mt-5">
        Subscribe now
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3 border"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          required
          type="email"
          placeholder="Enter Your Email"
        />
        <button
          type="submit"
          className="bg-gray-50 text-gray-700 hover:bg-gray-900 hover:text-gray-50 transition-all ease-linear border-gray-900 border font-semibold text-xl px-6 py-2"
        >
          subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
