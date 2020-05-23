export function GetPokemon() {
  console.log(`'coucou'`);
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=20/`)
    .then(response => response.json())
    .catch(error => console.error(error))
};