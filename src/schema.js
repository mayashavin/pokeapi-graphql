import typeDefs from "./data";
import resolvers from "./resolvers";
import PokeAPI from "./datasource/pokeAPI";

const schema = {
  typeDefs,
  resolvers,
  dataSources: () => ({
    pokeAPI: new PokeAPI(),
  }),
  introspection: true,
  playground: true,
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
    schemaTag: "production",
  },
};

export default schema;
