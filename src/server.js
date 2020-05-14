import { ApolloServer } from "apollo-server";
import schema from "./schema";

const port = process.env.PORT || 8080;

const apolloServer = new ApolloServer(schema);

apolloServer.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready ${url}`);
});
