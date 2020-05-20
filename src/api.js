export function GetPokemon(id) {
  console.log('coucou');
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${id}/`)
    .then(response => response.json())
    .catch(error => console.error(error))
};