import { getData } from "../api/api.js";

const pokemonsURL = "https://pokeapi.co/api/v2/pokemon/?limit=30";

async function getPokemon() {
  const pokemonList = await getData(pokemonsURL);

  const pokemonDataList = [];

  for (const pokemon of pokemonList.results) {
    const pokemonData = await getData(pokemon.url);
    const {
      id: number,
      name,
      types,
      sprites: { front_default: picture },
    } = pokemonData;

    pokemonDataList.push({
      number,
      name,
      types,
      picture,
    });
  }

  return pokemonDataList;
}

export default getPokemon;
