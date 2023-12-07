import React from "react";

const DetailsContainer = ({
  years,
  title,
  textgreen,
  description,
}: {
  years: string;
  title: string;
  textgreen: string;
  description: string;
}) => {
  return (
    <div className="details-container flex flex-col gap-1">
      <div className="years">{years}</div>
      <h4 className="title">{title}</h4>
      <span className="text-green">{textgreen}</span>
      <p className="description">{description}</p>
    </div>
  );
};

export default DetailsContainer;
