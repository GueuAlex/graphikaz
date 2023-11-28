import React from "react";

const LoadingBtn = () => {
  return (
    <button
      type="button"
      className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center justify-center"
    >
      <span className="loading loading-spinner loading-md mr-4"></span>{" "}
      Chargement...
    </button>
  );
};

export default LoadingBtn;
