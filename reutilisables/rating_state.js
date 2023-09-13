import React from 'react';
import PropTypes from 'prop-types';
import RatingChart from './rating_chart'
import _ from 'lodash';

const RatingStat = ({ ratings }) => {
  //-----ratings----- est un tableu des nombres des personnes
  // ayant voté 1/5, 2/5, 3/5, 4/5 et 5/5
  const ratingsArray = Array.isArray(ratings) ? ratings : [ratings];

  // on calcul le nombre total des votants a partir du tableau
  //-----ratings----- 
  const raterCount = ratingsArray.reduce((total, rating) => total + rating, 0);

  // on calcul la moyenne global en fonction de chaque note (1/5, 2/5, 3/5, 4/5 et 5/5)
  // et du nombre de personnes ayant mis ces notes 
  const average = (((ratingsArray.at(0) * 1) + (ratingsArray.at(1) * 2) + (ratingsArray.at(2) * 3) + (ratingsArray.at(3) * 4) + (ratingsArray.at(4) * 5)) / raterCount).toFixed(1);

  const yellowStars = Array.from({ length: Math.round(average) }, (_, i) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24">
         <path 
            d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" 
            fill="rgba(225,192,62,1)">
         </path>
    </svg>
  ));

  const greyStars = Array.from({ length: 5 - Math.round(average) }, (_, i) => (
    <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
        <path 
            d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z" 
            fill="rgba(225,192,62,1)">
        </path>
    </svg>
  ));

  return (
    <div className="review-score">
        <h2>{raterCount} Reviews</h2>
        <div className="score-card">
          <div className="score">
            <h1>{average}</h1>
            <div className="stars">
                {yellowStars}{greyStars}
            </div>
            <span>{raterCount} rating</span>
          </div>
          {/* start score */}
          <div className="scores-percent">
            <div className='rate-line-percent'>
              <span>1&nbsp;Star</span>  
              <progress className="progress rounded-none  progress-warning " value={((ratingsArray.at(0) / raterCount) * 100)} max="100"></progress>
              <span>{((ratingsArray.at(0) / raterCount) * 100).toFixed(0)}%</span>
            </div>
            <div className='rate-line-percent'>
              <span>2&nbsp;Star</span> 
              <progress className="progress rounded-none   progress-warning " value={((ratingsArray.at(1) / raterCount) * 100)} max="100"></progress> 
              <span>{((ratingsArray.at(1) / raterCount) * 100).toFixed(0)}%</span>
            </div>
            <div className='rate-line-percent'>
              <span>3&nbsp;Star</span>  
              <progress className="progress rounded-none   progress-warning " value={((ratingsArray.at(2) / raterCount) * 100)} max="100"></progress>
              <span>{((ratingsArray.at(2) / raterCount) * 100).toFixed(0)}%</span>
            </div>
            <div className='rate-line-percent'>
              <span>4&nbsp;Star</span>  
              <progress className="progress rounded-none  progress-warning " value={((ratingsArray.at(3) / raterCount) * 100)} max="100"></progress>
              <span>{((ratingsArray.at(3) / raterCount) * 100).toFixed(0)}%</span>
            </div>
            <div className='rate-line-percent'>
              <span>5&nbsp;Star</span>  
              <progress className="progress rounded-none  progress-warning " value={((ratingsArray.at(4) / raterCount) * 100)} max="100"></progress>
              <span>{((ratingsArray.at(4) / raterCount) * 100).toFixed(0)}%</span>
            </div>
            

            
            
          </div>
          {/* chart */}
        </div>
    </div>
  );
};

RatingStat.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default RatingStat;
