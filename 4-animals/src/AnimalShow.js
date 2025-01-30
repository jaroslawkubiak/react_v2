import "./AnimalShow.css";
import { useState } from "react";
import heart from "./svg/heart.svg";

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const imgStyle = {
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "100px",
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const image = `/src/svg/${type}.svg`;
  return (
    <div className="animal-show" onClick={handleClick}>
      <img src={image} alt="animal" className="animal" />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
