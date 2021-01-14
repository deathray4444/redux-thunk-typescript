import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReudcerType } from './Store'
import { fetchPokemonData } from './acitons/PokemonActions';





function App() {
  const [pokemonName,setPokemonName] = useState("")
  const pokemonReducer = useSelector((state: RootReudcerType) => state.PokemonReducer)
  const dispatch = useDispatch();
  
  const handlePokemonName = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value)
  const searchButtonTapped = () => {
    dispatch(fetchPokemonData(pokemonName))
    console.log( fetchPokemonData(pokemonName))
  }
  
  return (
    <div className="App">
      <input value={pokemonName} onChange={handlePokemonName} />
      <button onClick={searchButtonTapped}>포켓몬찾기</button>
      <div>
        {pokemonReducer.success && <div>
          <p>{pokemonName}</p>
          {pokemonReducer.pokemon?.abilities.map((ability) => {
            return <div key={ability.ability.name}><p>{ability.ability.name}</p>
              <p>{ability.slot}</p></div>
          })}
          <img src={pokemonReducer.pokemon?.sprites.front_default}/>
        
        </div>}
      </div>
    </div>
  );
}

export default App;
