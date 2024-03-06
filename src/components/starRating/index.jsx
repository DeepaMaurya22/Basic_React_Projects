import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";

export default function StarRating({ noOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleMouseClick(index) {
    console.log(index);
    setRating(index + 1);
  }

  function handleMouseMove(index) {
    console.log(index);
    setHover(index + 1);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div
      className="starRating"
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {Array(noOfStar)
        .fill()
        .map((_, index) => (
          <FaStar
            className={index < (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleMouseClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        ))}
    </div>
  );
}
StarRating.propTypes = {
  noOfStar: PropTypes.number,
};
