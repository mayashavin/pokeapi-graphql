import fetch from "node-fetch";
import qs from "qs";
import {
  normalizeHeight,
  normalizeTypes,
  normalizeWeight,
  sort,
  getAvatarUrl,
  normalizeAbilities,
  themeColorBasedOnType,
} from "../helpers";

const apiEndPoint = "https://pokeapi.co/api/v2/pokemon";

const resolvers = {
  Query: {
    pokemons: (obj, args, { dataSources }) =>
      dataSources.pokeAPI.pokemons(args),
    pokemon: (obj, { id }, { dataSources }) => dataSources.pokeAPI.pokemon(id),
  },
  Mutation: {
    sayHello: (obj, args, context, info) => `Hello ${args.name}`,
  },
};

export default resolvers;
