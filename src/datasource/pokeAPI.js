import {
  normalizeHeight,
  normalizeTypes,
  normalizeWeight,
  sort,
  getAvatarUrl,
  normalizeAbilities,
  themeColorBasedOnType,
} from "../helpers";
import { RESTDataSource } from "apollo-datasource-rest";

class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2/";
  }
  async pokemons({ limit, offset }) {
    const response = await this.get("pokemon", { limit, offset });
    const { results } = response;

    if (results) {
      const pokemonsList = await Promise.all(
        results.map(async (item) => {
          const data = await this.pokemon(item.name);
          const { types } = data;
          sort(types);

          const { type } = types[0];

          return {
            ...data,
            color: themeColorBasedOnType(type.name),
            types: normalizeTypes(types),
            avatar: getAvatarUrl(data.id),
            height: normalizeHeight(data.height),
            weight: normalizeWeight(data.weight),
            abilities: normalizeAbilities(data.abilities),
          };
        })
      );

      return {
        ...response,
        results: pokemonsList,
      };
    }

    return response;
  }
  async pokemon(id) {
    const response = await this.get(`pokemon/${id}`);

    return response;
  }
}

export default PokeAPI;
