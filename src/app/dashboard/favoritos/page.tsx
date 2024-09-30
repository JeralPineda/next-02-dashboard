import { FavoritePokemons } from "@/pokemons/components/favorite-pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Pagina de favoritos",
};

export default async function page() {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl my-2 p-2">
        Listado de Pokemons{" "}
        <small className="text-blue-500">Global state</small>
      </h2>

      {/* <PokemonGrid pokemons={ [] } /> */}

      <FavoritePokemons />
    </div>
  );
}
