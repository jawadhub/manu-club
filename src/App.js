
import './App.css';
import { useEffect, useState } from 'react';
import playerData from './data.json'
import Player from './Player/Player';
import Cart from './Cart/Cart';

function App() {

  const [player, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddPlayer = (player) =>{
    // console.log("New player Added", player);
    const newCart = [...cart, player];
    setCart(newCart);
  }

  useEffect((player) => {
    setPlayer(playerData);
    // console.log(playerData);
  }, [])
  return (
    <div className="App">
      <h1>Total Player : {player.length}</h1>
      <Cart cart={cart}></Cart>

      <ul>
        {playerData.map((player) => (
          <Player handleAddPlayer={handleAddPlayer} player={player} key={player.id}></Player>
        ))}
      </ul>
    </div>
  );
}

export default App;
