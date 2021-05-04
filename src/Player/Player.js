import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faFutbol } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  // console.log(props);
  const {name, nationality, position, jersey, salary, pic} = props.player;

  const handleAddPlayer = props.handleAddPlayer;

  return (
    <div className="container">
      <div className="player-container">
        <h1>Mr {name}</h1>
        <p>from {nationality}</p>
        <p>at {position} position in {jersey} jersey </p>
        <p>will cost the club {salary} per month</p>
        <button  className="main-button" onClick={() => handleAddPlayer(props.player)}>
           <FontAwesomeIcon icon={faFutbol }/> 
           Add player
        </button>
      </div>
      <div className="image-container">
        <img src={pic} alt="" />
      </div>
    </div>
  );
};

export default Player;