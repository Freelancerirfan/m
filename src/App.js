import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./component/Header/Header";
import Players from "./component/Players/Players";
import Sidebar from "./component/Sidebar/Sidebar";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);

  
  const addToCartHandler = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("https://api.mocki.io/v1/846410e6")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Header></Header>
      <main >
        <div className="row">
          <Players
            players={players}
            addToCartHandler={addToCartHandler}
          ></Players>
          <Sidebar cart={cart}></Sidebar>
        </div>
      </main>
    </div>
  );
};

export default App;
