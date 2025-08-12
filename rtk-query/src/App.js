import React, { useState } from 'react';
import { useGetPokemonByNameQuery } from './services/pokemon';

function App() {
  const [pokemonName, setPokemonName] = useState('bulbasaur');
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>RTK Query - Pokemon Search</h1>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
        placeholder="Enter Pokemon name"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error fetching data</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <img src={data.sprites.front_default} alt={data.name} />
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
        </div>
      )}
    </div>
  );
}

export default App;

