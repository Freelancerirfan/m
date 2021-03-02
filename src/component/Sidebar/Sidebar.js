import React from "react";
import "./Sidebar.css";


const Sidebar = ({ cart }) => {
 
  const total = cart.reduce((sum, player) => sum + player.salary, 0);
  return (
    <aside className="sidebar col-md-4 ps-5">
      <p className="lead">Players in my Team ({cart.length})</p>
      <ul className="list-group my-4">
        {cart.map((player) => (
          <li key={player.id} className="list-group-item">
            {player.name} - {player.salary}$
          </li>
        ))}
      </ul>
      <div className="d-grid">
        <button className="btn btn-outline-primary text-style">
          Total Cost - {total}$
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
