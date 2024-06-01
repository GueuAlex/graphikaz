import React from "react";
import "@/styles/similar_services_style.scss";
interface SimilarServiceProps {}
const SimilarService: React.FC<SimilarServiceProps> = ({}) => {
  return (
    <div className="similaire-services-container">
      <div className="heed">
        <h2>Les services similaire</h2>
      </div>
    </div>
  );
};

export default SimilarService;
