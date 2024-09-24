import { PokemonGrid } from "@/pokemons/components/pokemon-grid";
import { PokemonsResponse } from "@/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";

const getPokemons = async (limit: number = 20, offset: number = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (res) => res.json()
  );

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error("Exto es un error que no deberia de suceder");

  return pokemons;
};

export default async function page() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl my-2">
        Listado de Pokemons <span>estático</span>
      </h2>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
