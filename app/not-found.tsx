import Head from "next/head";
import React from "react";
import "./not-found-style.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="large-dot flex justify-center items-center">
          <div className="img-background flex justify-center items-center "></div>
        </div>
        <div className="text-container">
          <h1 className="nunito"> 404</h1>
          <h2 className="nunito">OPPS ! PAGE NOT BE FOUND</h2>
          <p className="nunito">
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporaril unavailable
          </p>
          <div className="w-full py-3">
            <a href="/" className="go-back nunito">
              Back to Home Page →
            </a>
          </div>
        </div>
        <div className="text-container2">
          <h1 className="nunito"> 404</h1>
          <h2 className="nunito">OPPS ! PAGE NOT BE FOUND</h2>
          <p className="nunito">
            Sorry but the page you are looking for does not exist, have been
            removed.
            <br />
            name changed or is temporaril unavailable
          </p>
          <div className="w-full py-3 flex justify-center items-center">
            <a href="/" className="go-back nunito">
              Back to Home Page →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
