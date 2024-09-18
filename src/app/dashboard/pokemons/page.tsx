import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";
import Image from "next/image";

const getPokemons = async (
  limit: number = 20,
  offset: number = 0,
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  ).then((res) => res.json());

  console.log("🚀 page.tsx -> #14 ~", data);

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function page() {
  const pokemons = await getPokemons(151);
  console.log("🚀 page.tsx -> #23 ~", pokemons);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons?.map((pokemon) => (
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width="100"
            height="100"
            className="w-28 h-28"
            priority
            alt={pokemon.name}
          />
        ))}
      </div>
    </div>
  );
}
