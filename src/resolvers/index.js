import fetch from 'node-fetch'
import qs from 'qs'
import { normalizeHeight, normalizeTypes, normalizeWeight, sort, getAvatarUrl, normalizeAbilities, themeColorBasedOnType } from '../helpers';

const apiEndPoint = "https://pokeapi.co/api/v2/pokemon"

const resolvers = {
  Query: {
    pokemons: async (obj, args, context, info) => {
      const url = `${apiEndPoint}?${qs.stringify({limit: args.limit, offset: args.offset})}`;
      const pokemonsRes = await fetch(url).then(res => res.json());
      const { results } = pokemonsRes;

      if (results) {
        const pokemonsList = await Promise.all(results.map(async (item) => {
          const data = await fetch(item.url).then(res => res.json());
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
            abilities: normalizeAbilities(data.abilities)
          }
        }));

        return {
          ...pokemonsRes,
          results: pokemonsList
        }
      } 

      return pokemonsRes
    },
    pokemon: (obj, args, context, info) => fetch(`${apiEndPoint}/${args.id}`).then(res => res.json())
  },
  Mutation: {
    sayHello: (obj, args, context, info) => `Hello ${args.name}`
  }
};

export default resolvers;