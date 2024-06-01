import React, { useState } from "react";
import Rate from "./rate";
import { GraphicServProps } from "@/types";

import "@/styles/ratting_review_style.scss";

interface RattingReviewComponentProps {
  service: GraphicServProps;
}

export const RattingReviwComponent: React.FC<RattingReviewComponentProps> = ({
  service,
}) => {
  const [rating, setRating] = useState(0);
  return (
    <div className="ratting-area">
      {/* <RatingStates ratings={[29, 125, 50, 70, 93]} /> */}
      {/* rating statistic */}

      {/* comment area */}
      <div className="review-comment">
        <span className="text-bold">Laissez un avis</span>
        <form action="">
          <span className="text-small">Votre évaluation pour ce service</span>

          <Rate
            rating={rating}
            onRating={(rate: React.SetStateAction<number>) => setRating(rate)}
          />

          <div className="inputs">
            <div className="comment-input">
              <span className="inpu-label">Votre commentaire</span>
              <textarea
                name=""
                id=""
                rows={4}
                placeholder="Commentaire"
              ></textarea>
            </div>
            <div className="name-email-inputs mobile-col-inputs">
              <div className="name-input">
                <span className="inpu-label">Votre nom</span>
                <input type="text" placeholder="nom" />
              </div>
              <div className="email-input">
                <span className="inpu-label">Votre Email</span>
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="check-box">
              <input type="checkbox" />
              <span className="text-small">
                Enregistrer mes informations pour la prochaine fois que je ferai
                un commentaire.
              </span>
            </div>
            <button type="submit" className="mobile-full">
              Envoyer
            </button>
          </div>
        </form>
        {/* rating & comment form */}
      </div>
    </div>
  );
};
