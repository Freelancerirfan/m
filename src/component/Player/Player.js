
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  const { name, image, salary, jersey } = props.player;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      
        <div className="card border-0">
          <img src={image} alt="..." />
          <div >
            <h3 >{name}</h3>
            <h5 >JERSEY: {jersey}</h5>
            <h6 >Transfer Value: ${salary}</h6>
            <button
              disabled={isClicked}
              onClick={() => {
                props.addToCartHandler(props.player);
                setIsClicked(true);
              }}
              className="btn btn-primary"
            >
              <FontAwesomeIcon icon={faPlusCircle} />
              Add To Team
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default Player;
