import React from 'react';
import PropTypes from 'prop-types';

const RatingChart = ({ ratings, colors }) => {
  if (!ratings || !colors || ratings.length !== colors.length) {
    console.error("Les tableaux 'ratings' et 'colors' doivent avoir la même longueur ou être définis.");
    return null; // Ou toute autre gestion d'erreur appropriée
  }

  const max = Math.max(...ratings);

  return (
    <table className="w-full bg-red-300">
      <tbody>
        {ratings.map((item, itemIndex) => {
          const widthPercentage = (item / max) * 100;
          const backgroundColor = colors[itemIndex] || '#f00';

          return (
            <tr key={itemIndex}>
              <td className="w-1/5 text-right">
                {5 - itemIndex}{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1l1.29 4.47h4.45a.5.5 0 0 1 .48.35l1.2 4.69 4.28.13a.5.5 0 0 1 .38.77l-3.46 2.52 1.16 4.56a.5.5 0 0 1-.74.59L10 15.4l-3.61 2.56a.5.5 0 0 1-.74-.59l1.16-4.56-3.46-2.52a.5.5 0 0 1 .38-.77l4.28-.13 1.2-4.69a.5.5 0 0 1 .48-.35h4.45L10 1z"
                  />
                </svg>
              </td>
              <td>
                <div
                  className="bg-blue-500"
                  style={{
                    width: `${widthPercentage}%`,
                    height: 'auto',
                    backgroundColor,
                  }}
                >
                  <span className="text-black pl-2">{item}</span>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

RatingChart.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number),
  colors: PropTypes.array,
};

export default RatingChart;
