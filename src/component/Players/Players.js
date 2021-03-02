import React from "react";
import Player from "../Player/Player";

const Players = (props) => {
  const players = props.players;

  return (
    <section className="products col-md-8 border-end">
      <div className="row row-cols-3 gx-5 gy-5">
        {players.map((player) => (
          <Player
            player={player}
            key={player.id}
            addToCartHandler={props.addToCartHandler}
          ></Player>
        ))}
      </div>
    </section>
  );
};

export default Players;
