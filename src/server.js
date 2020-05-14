import { ApolloServer } from "apollo-server";
import schema from "./schema";

const port = process.env.PORT || 8080;

const apolloServer = new ApolloServer({
  ...schema,
  cors: true,
  subscriptions: "/api",
});

apolloServer.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready ${url}`);
});
